import React from "react";
import { Link } from "react-router-dom";
import styles from "./UserItem.module.css";

import Avatar from "../../../shared/components/UIElements/Avatar/Avatar";
import Card from "../../../shared/components/UIElements/Card/Card";

const UserItem = props => {
// A card for a single user linking to the places created by that user

  return (
    <li className={styles.UserItem}>
      <Card className={styles.UserItem__content}>
        <Link to={`/${props.id}/places`}>
          <div className={styles.UserItem__image}>
            <Avatar image={`${process.env.REACT_APP_ASSET_URL}/${props.image}`} alt={props.name} />
          </div>
          <div className={styles.UserItem__info}>
            <h2>{props.name}</h2>
            <h3>
              {props.placeCount} {props.placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
