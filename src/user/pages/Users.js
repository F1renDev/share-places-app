import React from "react";

import UsersList from "../../user/components/UsersList/UsersList";

const Users = () => {
  // Temporary solution immitating the backend with a list of users

  const USERS = [
    {
      id: "u1",
      name: "Val",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/71Cx7Lvs0FL._SL1500_.jpg",
      places: 3
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
