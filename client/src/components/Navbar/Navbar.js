import React from "react";
import {useHistory} from 'react-router-dom';
import { ROUTES } from "../../constant/routes";

const Navbar = () => {
  const history = useHistory();
  return (
    <div className="navbar">
      <h4 className="navbar-title">Employee Management System</h4>
      <div className="logout-text" onClick={() => {
        localStorage.removeItem("token");
        history.push(ROUTES.LOGIN);
        }}>Logout</div>
    </div>
  );
};

export default Navbar;
