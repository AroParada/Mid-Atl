import React, { Component } from "react";
import { Navbar, Icon, NavItem, Textarea } from 'react-materialize';
import SideNav from "react-materialize/lib/SideNav";
import Logo from '../assets/mad_logo_1621017828__60458 (1).webp'
import SearchBar from './search';

<a class="btn-floating btn-large cyan pulse"><i class="material-icons">edit</i></a>
class Nav extends Component {
  render() {
    return (
        <>
      <Navbar
  alignLinks="right"
  brand={<a className="brand-logo" src={Logo} href="#"> <img id='logo' src={Logo} /></a>}
  id="mobile-nav"
  menuIcon={<Icon>menu</Icon>}
  options={{
    draggable: true,
    edge: 'left',
    inDuration: 250,
    onCloseEnd: null,
    onCloseStart: null,
    onOpenEnd: null,
    onOpenStart: null,
    outDuration: 200,
    preventScrolling: true
  }}
>
<SearchBar />

  <NavItem href="">
    Getting started
  </NavItem>
  <NavItem href="components.html">
    Components
  </NavItem>

</Navbar>
        </>

    );
  }
}

export default Nav;