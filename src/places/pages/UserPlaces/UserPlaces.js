import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../../components/PlaceList/PlaceList";

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

const UserPlaces = props => {
  //  User id that is encoded in the URL
  const userId = useParams().userId;
  
  // Returning only the places of the current user
  const loadPlaces = TEST_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadPlaces} />;
};

export default UserPlaces;
