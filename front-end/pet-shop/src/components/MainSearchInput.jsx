/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from 'react';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button,
  Form, FormFeedback } from 'reactstrap';
import { handleInput } from '../store/actions/search';

import search from '../assets/Search.svg';

import './MainSearchInput.style.css';

const initialValues = {
  queryInput: '',
};

// creating the validation schema
const validationSchema = yup.object().shape({
  queryInput: yup
    .string()
    .required('É necessário um termo para busca')
    .matches(/^[aA-zZ\s]+$/, 'Somente letras de A a Z')
    .min(2, 'Pelo menos duas letras'),
});

const MainSearchInput = ({ onSubmit, handleQuery }) => {
  // using useFormik
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  // use formik.getFieldProps for input fields
  const queryProps = formik.getFieldProps('queryInput');

  const { name, onBlur, onChange, value } = queryProps;

  return (
    <div className="input-container">
      <br />
      <Form>
        <InputGroup>
          <Input
            invalid={ formik.touched.queryInput && formik.errors.queryInput }
            name={ name }
            onBlur={ onBlur }
            value={ value }
            onChange={ onChange }
            placeholder="O que você procura?"
          />
          <InputGroupAddon addonType="prepend">
            <InputGroupText><img src={ search } alt="search" /></InputGroupText>
          </InputGroupAddon>
          {formik.touched.queryInput && formik.errors.queryInput ? (
            <FormFeedback>{formik.errors.queryInput}</FormFeedback>
          ) : null}
        </InputGroup>
        <br />
        <InputGroupAddon addonType="append">
          <Button
            color="secondary"
            disabled={ !(formik.isValid && formik.dirty) }
            // type="submit"
            onClick={ () => handleQuery(value) }
          >
            Pesquisar
          </Button>
        </InputGroupAddon>
      </Form>
      <br />
    </div>
  );
};

const mapStateToProps = (state) => ({
  inputQuery: state.inputQuery,
});

const mapDispatchToProps = (dispatch) => ({
  handleQuery: (queryInput) => dispatch(handleInput(queryInput)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearchInput);
