import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock, FiUserCheck } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface RegisterFormData {
  name: string;
  cnpj: string;
  email: string;
  password: string;
}

const Register: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: RegisterFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup
          .string()
          .required('Name required'),

        cnpj: Yup
          .string()
          .required('CNPJ required'),

        email: Yup
          .string()
          .required('E-mail required')
          .email('Enter a valid email address.'),

        password: Yup
          .string()
          .min(6, '6 characters minimum'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post('/api/v1/user', data);
      console.log(response)

      
      addToast({
        type: 'success',
        title: 'Registration completed!',
        description: 'You can now logon in Virtual Store!',
      })
      
      history.push('/')
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
  }, [addToast, history]);

  return (
  <Container>
    <Background/>
    <Content>
      <AnimationContainer>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h2>Make your registration</h2>

          <Input 
            type="text" 
            icon={FiUser} 
            name="name" 
            id="name" 
            placeholder="Name"
          />

          <Input 
            type="text" 
            icon={FiUserCheck} 
            name="cnpj" 
            id="cnpj" 
            placeholder="CNPJ"
          />

          <Input 
            type="email" 
            icon={FiMail} 
            name="email" 
            id="email" 
            placeholder="E-mail"
          />
          <Input 
            type="password" 
            icon={FiLock} 
            name="password" 
            id="password" 
            placeholder="Password"
          />

          <Button type="submit">Register</Button>

        </Form>

        <Link to="/">
          <FiArrowLeft />
          Back to login
        </Link>
      </AnimationContainer>
    </Content>
  </Container>
)};

export default Register;