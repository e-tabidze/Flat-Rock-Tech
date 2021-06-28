import React from "react";
import { Link } from "react-router-dom";
import SettingsIcon from "../../../../assets/Icons/Actions/settings.png";
import classes from "./styles.module.scss";

const Index = ({ id, firstName, lastName, email, role }) => {
  return (
    <Link
      to={{
        pathname: `UserSetup/${id}`,
        state: {
          itemId: id,
          lastName: lastName,
          firstName: firstName,
          email: email,
          role: role,
        },
      }}
    >
      <img
        src={SettingsIcon}
        alt="Settings"
        className={classes.container_img}
      />
    </Link>
  );
};

export default Index;
