import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NotFound = ({ inputQuery }) => (
  <section>
    {`Nada foi encontrado com o termo ${inputQuery}`}
  </section>
);

NotFound.propTypes = {
  queryInput: PropTypes.string,
  inputQuery: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  inputQuery: state.searchReducer.inputQuery,
});

export default connect(mapStateToProps)(NotFound);
