import { connect } from 'react-redux';

import Navbar from '../components/navbar/Navbar';

const mapStateToProps = state => {
  return {
    isAuthenticated: state.user.isAuthenticated
  };
};

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;
