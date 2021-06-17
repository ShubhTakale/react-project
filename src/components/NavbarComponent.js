import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  ButtonToggle,
} from "reactstrap";
import { LOGIN_CONSTANTS } from "../redux/actions/loginActions/actionTypes";

function NavbarComponent(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const onLogout = () => {
    sessionStorage.setItem("user_data", null);
    dispatch({ type: LOGIN_CONSTANTS.LOGOUT });
    history.push("/login");
  };
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarToggler />
        <Collapse navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard/user">User Details</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        <ButtonToggle onClick={onLogout} className=" float-end" color="danger">
          Logout
        </ButtonToggle>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
