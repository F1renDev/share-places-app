import React from "react";
import styles from "./NavLinks.module.css";

import { NavLink } from "react-router-dom";

const NavLinks = props => {
  return (
    <ul className={styles.NavLinks}>
      <li>
        <NavLink activeClassName={styles.active} to="/" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/u1/places">
          My Places
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/places/new">
          New Place
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName={styles.active} to="/auth">
          Authenticate
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
