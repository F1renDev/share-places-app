import React from "react";
import styles from "./UsersList.module.css";

import UserItem from "../UserItem/UserItem";
import Card from "../../../shared/components/UIElements/Card/Card";

const UsersList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styles.UsersList}>
      {props.items.map(user => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          // number of places created by the user
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
