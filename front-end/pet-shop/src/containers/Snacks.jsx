import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainContentGrid from '../components/MainContentGrid';
import MainSearchInput from '../components/MainSearchInput';
import { handleTabs } from '../store/actions/tabs';

import headerTabsNames from '../constants/headerTabsNames';

// import './BadsAndHouses.style.css';

const Snacks = ({ getResults }) => {
  useEffect(() => {
    getResults(headerTabsNames.snacks.replace(' ', '+'));
  }, [getResults]);

  return (
    <main className="main-content">
      <MainSearchInput />

      <h1>{headerTabsNames.snacks}</h1>

      <MainContentGrid />
    </main>
  );
};

Snacks.propTypes = {
  getResults: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  tabName: state.tabsReducer.tabName,
});

const mapDispatchToProps = (dispatch) => ({
  getResults: (query, value) => dispatch(handleTabs(query, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Snacks);
