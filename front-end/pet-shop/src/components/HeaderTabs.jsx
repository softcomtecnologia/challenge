import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Nav, NavItem, NavLink } from 'reactstrap';

import headerTabsNames from '../constants/headerTabsNames';

import './HeaderTabs.style.css';
// import { handleTabs } from '../store/actions/tabs';

const HeaderTabs = ({ tabName }) => (
  <Nav tabs>
    <NavItem>
      <NavLink
        href="/"
        active={ tabName === headerTabsNames.sugestions }
      >
        {headerTabsNames.sugestions}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="/brinquedos"
        active={ tabName === headerTabsNames.toys }
      >
        {headerTabsNames.toys}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="/camas-e-casinhas"
        active={ tabName === headerTabsNames.bedHouse }
      >
        {headerTabsNames.bedHouse}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="/coleiras"
        active={ tabName === headerTabsNames.leach }
      >
        {headerTabsNames.leach}
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink
        href="/ossos-e-petiscos"
        active={ tabName === headerTabsNames.snacks }
      >
        {headerTabsNames.snacks}
      </NavLink>
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
