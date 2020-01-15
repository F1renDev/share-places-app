import React from "react";
import styles from "./PlaceList.module.css";

import Card from "../../../shared/components/UIElements/Card/Card";
import PlaceItem from "../PlaceItem/PlaceItem";
import Button from "../../../shared/components/FormElements/Button/Button";

const PlaceList = props => {
  // If there is no places created by this user, suggest creating some
  // or display all places created by this user
  if (props.items.length === 0) {
    return (
      <div className={`${styles.PlaceList} center`}>
        <Card style={{ padding: "1rem" }}>
          <h2>No places found. Maybe create one?</h2>
          <Button to="/places/new">Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={styles.PlaceList}>
      {props.items.map(place => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.imageUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
