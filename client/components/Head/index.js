import React from 'react';
import styled from 'styled-components';
import { MdViewHeadline } from 'react-icons/lib/md';

const Header = styled.header`
  position: relative;
  max-height: 100px;
  z-index: 1030;
`;

const Logo = styled.a`
  background-color: #008d4c;
  color: #fff;
  border-bottom: 0 solid transparent;
  transition: width 0.3s ease-in-out;
  display: block;
  float: left;
  height: 50px;
  font-size: 20px;
  line-height: 50px;
  text-align: center;
  width: 230px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 300;
  overflow: hidden;
`;

const NavBar = styled.nav`
  background-color: #00a65a;
  margin-bottom: 0;
  margin-left: 230px;
  border: none;
  min-height: 50px;
  border-radius: 0;
  z-index: 1000;
`;

const SideMenuToggle = styled.a`
  float: left;
  background-color: transparent;
  background-image: none;
  padding: 10px 15px;
  font-family: fontAwesome;
  cursor: pointer;
  &:hover {
    background-color: #008d4c;
  }
`;

const NavbarCustomMenu = styled.div`
  float: right;
`;

const NavbarContainer = styled.ul`
  list-style: none;
  float: left;
  margin: 0;
  padding-left: 0;
`;

const NavbarItem = styled.li`
  position: relative;
  display: block;
`;

export default function Head({ userInfo }) {
  return (
    <Header>
      <Logo>
        <span className="logo-mini">
          <b>A</b>LT
        </span>
        <span className="logo-lg">
          <b>Admin</b>LTE
        </span>
      </Logo>

      <NavBar>
        <SideMenuToggle>
          <MdViewHeadline size={30} />
        </SideMenuToggle>
        <NavbarCustomMenu>
          <NavbarContainer>
            <NavbarItem>asdasd</NavbarItem>
          </NavbarContainer>
        </NavbarCustomMenu>
      </NavBar>
    </Header>
  );
}
