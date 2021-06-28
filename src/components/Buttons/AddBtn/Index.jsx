import React from "react";
import classes from "./styles.module.scss";
const Index = ({ handleClick }) => {
  return (
    <button onClick={handleClick} className={classes.addbtn}>
      +
    </button>
  );
};

export default Index;
