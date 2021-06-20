import React from "react";
import { Link } from "react-router-dom";
import SettingsIcon from "../../../../assets/Icons/Actions/settings.svg";

const Index = ({ id, firstName, lastName, email }) => {
  return (
    <Link
      to={{
        pathname: `User_Setup/${id}`,
        state: {
          itemId: id,
          lastName: lastName,
          firstName: firstName,
          email: email,
        },
      }}
    >
      <img src={SettingsIcon} alt="Settings" />
    </Link>
  );
};

export default Index;
