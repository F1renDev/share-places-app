import React, { useContext } from "react";
import styles from "./NavLinks.module.css";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../shared/context/auth-context";

const NavLinks = props => {
  const auth = useContext(AuthContext);

  //A list of navigation items
  return (
    <ul className={styles.NavLinks}>
      <li>
        <NavLink activeClassName={styles.active} to="/" exact>
          All Users
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink activeClassName={styles.active} to={`/${auth.userId}/places`}>
            My Places
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink activeClassName={styles.active} to="/places/new">
            New Place
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink activeClassName={styles.active} to="/auth">
            Authenticate
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <button onClick={auth.logout}>LOGOUT</button>
        </li>
      )}
    </ul>
  );
};

export default NavLinks;
