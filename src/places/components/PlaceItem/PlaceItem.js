import React, { useState } from "react";
import styles from "./PlaceItem.module.css";

import Card from "../../../shared/components/UIElements/Card/Card";
import Button from "../../../shared/components/FormElements/Button/Button";
import Modal from "../../../shared/components/UIElements/Modal/Modal";

const PlaceItem = props => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass={styles.PlaceItem__modalContent}
        footerClass={styles.PlaceItem__modalActions}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className={styles.MapContainer}>THE MAP GOES HERE</div>
      </Modal>
      <li className={styles.PlaceItem}>
        <Card className={styles.PlaceItem__content}>
          <div className={styles.PlaceItem__image}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={styles.PlaceItem__info}>
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description}</p>
          </div>
          <div className={styles.PlaceItem__actions}>
            <Button inverse onClick={openMapHandler}>View on a map</Button>
            <Button to={`/places/${props.id}`}>EDIT</Button>
            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default PlaceItem;
