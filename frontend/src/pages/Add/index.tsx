import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiBox, FiAlignJustify, FiDollarSign } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory, Link } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';

import logoImg from '../../assets/logo.svg';

import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { Container, Content, Head } from './styles';

interface RegisterFormDataItem {
  name: string;
  description: string;
  price: number;
}

const Change: React.FunctionComponent = () => {
  const token = localStorage.getItem('@VirtualStore:token')  || '{}';
  const user = JSON.parse(localStorage.getItem('@VirtualStore:user') || '{}');

  const { addToast } = useToast();
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmitItem = useCallback(async (data: RegisterFormDataItem) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup
          .string()
          .required('Name required'),

        description: Yup
          .string()
          .required('description required'),

        price: Yup
          .string()
          .required('price required'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post(`/api/v1/user/${user.id}/item`, 
        data, 
        { 
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      addToast({
        type: 'success',
        title: `Registered success`,
        description: 'Item successfully registered',
      });

      history.push('/dashboard')
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Error in register',
        description: 'There was an error making your registration, please try again!',
      });
    }
  }, [addToast, history, token, user.id])

  return (
    <Container>
      <Head>
        <div id="compact">
          <div id="logo">
            <img src={logoImg} alt=""/>
          </div>

          <Link to='/dashboard'>
            <div id="return">
              <FiArrowLeft size={18} color="#F4EDE8"/>
            </div>
          </Link>
        </div>
      </Head>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmitItem}>
          <h2>Register Item</h2>

          <Input 
            type="text" 
            icon={FiBox} 
            name="name" 
            id="name" 
            placeholder="Name"
          />

          <Input 
            type="text" 
            icon={FiAlignJustify} 
            name="description" 
            id="description" 
            placeholder="Description"
          />

          <Input 
            type="number" 
            icon={FiDollarSign} 
            name="price" 
            id="price" 
            placeholder="Price"
          />

          <Button type="submit">Register</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Change;