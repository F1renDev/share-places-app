import React, { useState } from "react";
import styles from "./MainNavigation.module.css";
import { Link } from "react-router-dom";

import MainHeader from "../MainHeader/MainHeader";
import NavLinks from "../NavLinks/NavLinks";
import SideDrawer from "../SideDrawer/SideDrawer";
import Backdrop from "../../UIElements/Backdrop/Backdrop";

const MainNavigation = props => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };

  //If in mobile view - the navigation links look different

  return (
    <React.Fragment>
      {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} /> : null}
      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className={styles.MainNavigation__drawerNav}>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button className={styles.MainNavigation__menuBtn} onClick={openDrawerHandler}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <h1 className={styles.MainNavigation__title}>
          <Link to="/">Your Places</Link>
        </h1>
        <nav className={styles.MainNavigation__headerNav}>
          <NavLinks />
        </nav>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
