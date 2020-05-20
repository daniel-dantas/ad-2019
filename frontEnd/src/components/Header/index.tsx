import React from 'react'

import { MDBNavbar, MDBNavbarBrand, MDBNavLink } from 'mdbreact'

import './styles.css'

const Header: React.FC = () => {
  return (
      <MDBNavbar dark expand="md" className='header-content'>
        <MDBNavbarBrand>
          <MDBNavLink to='/'>
            <strong className="white-text">Amigo secreto da Adireto</strong>
          </MDBNavLink>
        </MDBNavbarBrand>
      </MDBNavbar>
  );
}

export default Header