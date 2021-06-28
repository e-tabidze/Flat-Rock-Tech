import React from "react";
import classes from "./styles.module.scss";
import DeleteIcon from "../../../../assets/Icons/Actions/delete.svg";

const Index = ({ setItemToDelete, item }) => {
  return (
    <button onClick={() => setItemToDelete(item)} className={classes.container}>
      <img src={DeleteIcon} alt="Delete" className={classes.container_icon} />
    </button>
  );
};

export default Index;
