import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';

import headerTabsNames from '../constants/headerTabsNames';

import './HeaderTabs.style.css';
// import { handleTabs } from '../store/actions/tabs';

const HeaderTabs = ({ tabName }) => (
  <Nav tabs>
    <NavItem>
      <Link
        className="section-links"
        to="/"
      >
        <NavLink tag="button" active={ tabName === headerTabsNames.sugestions }>
          {headerTabsNames.sugestions}
        </NavLink>
      </Link>
    </NavItem>

    <NavItem>
      <Link
        className="section-links"
        to="/brinquedos"
      >
        <NavLink tag="button" active={ tabName === headerTabsNames.toys }>
          {headerTabsNames.toys}
        </NavLink>
      </Link>
    </NavItem>

    <NavItem>
      <Link
        className="section-links"
        to="/camas-e-casinhas"
      >
        <NavLink tag="button" active={ tabName === headerTabsNames.bedHouse }>
          {headerTabsNames.bedHouse}
        </NavLink>
      </Link>
    </NavItem>

    <NavItem>
      <Link
        className="section-links"
        to="/coleiras"
      >
        <NavLink tag="button" active={ tabName === headerTabsNames.leach }>
          {headerTabsNames.leach}
        </NavLink>
      </Link>
    </NavItem>

    <NavItem>
      <Link
        className="section-links"
        to="/ossos-e-petiscos"
      >
        <NavLink tag="button" active={ tabName === headerTabsNames.snacks }>
          {headerTabsNames.snacks}
        </NavLink>
      </Link>
    </NavItem>
  </Nav>
);

HeaderTabs.propTypes = {
  tabName: PropTypes.string,
  getResults: PropTypes.func,
}.isRequired;

const mapStateToProps = (state) => ({
  tabName: state.tabsReducer.tabName,
});

// const mapDispatchToProps = (dispatch) => ({
//   getResults: (query, value) => dispatch(handleTabs(query, value)),
// });

export default connect(mapStateToProps)(HeaderTabs);
