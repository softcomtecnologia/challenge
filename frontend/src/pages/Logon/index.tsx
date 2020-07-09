import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/AuthContext';
import { useToast } from '../../hooks/ToastContext';
import getValidationErrors from '../../utils/getValidationErrors';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, AnimationContainer, Background } from './styles';

interface LogonForData {
  email: string;
  cnpj: string;
  password: string;
}

const Logon: React.FunctionComponent = () => {
  const formRef = useRef<FormHandles>(null);

  const { logon } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: LogonForData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup
          .string()
          .required('E-mail required')
          .email('Enter a valid email address.'),

        password: Yup
          .string()
          .required('Password required')
          .min(6)
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await logon({
        email: data.email,
        cnpj: '',
        password: data.password,
      });

      history.push('/dashboard');

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }

      addToast({
        type: 'error',
        title: 'Error in authentication',
        description: 'There was an error signing in, check credentials',
      });
    }
  }, [logon, addToast, history]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img width="250" src={logoImg} alt="VirtualStore"/>

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h2>Make your Login</h2>

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

            <Button type="submit">Login</Button>

          </Form>

          <Link to="/register">
            <FiLogIn />
            Create an account
          </Link>
        </AnimationContainer>
      </Content>
      <Background/>
    </Container>
  )
};

export default Logon;