import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./UpdatePlace.module.css";

import Input from "../../../shared/components/FormElements/Input/Input";
import Button from "../../../shared/components/FormElements/Button/Button";
import Card from "../../../shared/components/UIElements/Card/Card";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from "../../../shared/utility/validators";
import { useForm } from "../../../shared/hooks/form-hook";

// Temporary immitation of the backend with places created by user
const TEST_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7483405,
      lng: -73.9858531
    },
    creator: "u1"
  },
  {
    id: "p2",
    title: "Emp. State Building",
    description: "One of the most famous skyscrapers in the world",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/c/c7/Empire_State_Building_from_the_Top_of_the_Rock.jpg",
    address: "20 W 34th St, New York, NY 10001",
    location: {
      lat: 40.7483405,
      lng: -73.9858531
    },
    creator: "u2"
  }
];

const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: { value: "", isValid: false },
      description: { value: "", isValid: false }
    },
    false
  );

  const identifiedPlace = TEST_PLACES.find(place => place.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: { value: identifiedPlace.title, isValid: true },
          description: { value: identifiedPlace.description, isValid: true }
        },
        true
      );
    }
    setIsLoading(false);
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = event => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card style={{ padding: "1rem" }}>
          <h2>Could not find place!</h2>
        </Card>
      </div>
    );
  }

  // The form is only rendered if I have a title value
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className={styles.PlaceForm} onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please, add a valid title"
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please, add a valid description (Minimum 5 chracters)"
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
