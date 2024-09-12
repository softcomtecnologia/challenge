import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button,
  Form, FormFeedback } from 'reactstrap';
import { searchQuery } from '../store/actions/search';

import search from '../assets/Search.svg';

import './MainSearchInput.style.css';

const initialValues = {
  queryInput: '',
};

const MAX_CHAR_NUM_25 = 25;

// creating the validation schema
const validationSchema = yup.object().shape({
  queryInput: yup
    .string()
    .required('É necessário um termo para busca')
    .matches(/^[aA-zZ\s]+$/, 'Somente letras de aA a zZ')
    .min(1, 'Pelo menos duas letras')
    .max(MAX_CHAR_NUM_25, 'Máximo 25 caracteres'),
});

const MainSearchInput = ({ handleSearch }) => {
  // using useFormik
  const formik = useFormik({
    initialValues,
    validationSchema,
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
            invalid={ (formik.touched.queryInput && !formik.isValid) }
            name={ name }
            onBlur={ onBlur }
            value={ value }
            onChange={ onChange }
            placeholder="O que você procura?"
            maxLength={ MAX_CHAR_NUM_25 }
          />

          <InputGroupAddon addonType="prepend">
            <InputGroupText><img src={ search } alt="search" /></InputGroupText>
          </InputGroupAddon>

          {formik.touched.queryInput && formik.errors.queryInput ? (
            <FormFeedback data-testid="feedback">{formik.errors.queryInput}</FormFeedback>
          ) : null}
        </InputGroup>

        <br />

        <InputGroupAddon addonType="append">
          <Button
            color="secondary"
            disabled={ !(formik.isValid && formik.dirty) }
            onClick={ () => handleSearch(value.replace(' ', '+')) }
          >
            Pesquisar
          </Button>
        </InputGroupAddon>
      </Form>
      <br />
    </div>
  );
};

MainSearchInput.propTypes = {
  handleSearch: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  inputQuery: state.inputQuery,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearch: (query) => dispatch(searchQuery(query)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSearchInput);
