import React from 'react';
import PropTypes from 'prop-types';

const NotFound = ({ queryInput }) => (
  <section>
    {`Nada foi encontrado com o termo ${queryInput}`}
  </section>
);

NotFound.propTypes = {
  queryInput: PropTypes.string,
}.isRequired;

export default NotFound;
