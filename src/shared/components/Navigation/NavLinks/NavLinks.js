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
          ALL USERS
        </NavLink>
      </li>
      {auth.isLoggedIn && (
        <li>
          <NavLink activeClassName={styles.active} to={`/${auth.userId}/places`}>
            MY PLACES
          </NavLink>
        </li>
      )}
      {auth.isLoggedIn && (
        <li>
          <NavLink activeClassName={styles.active} to="/places/new">
            ADD PLACE
          </NavLink>
        </li>
      )}
      {!auth.isLoggedIn && (
        <li>
          <NavLink activeClassName={styles.active} to="/auth">
            AUTHENTICATE
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
