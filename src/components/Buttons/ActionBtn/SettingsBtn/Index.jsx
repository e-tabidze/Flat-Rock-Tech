import React from "react";
import { Link } from "react-router-dom";
import SettingsIcon from "../../../../assets/Icons/Actions/settings.svg";

const Index = ({ id }) => {
  return (
    <Link to={{ pathname: `User_Setup/${id}`, state: { itemId: id } }}>
      <img src={SettingsIcon} alt="Settings" />
    </Link>
  );
};

export default Index;
