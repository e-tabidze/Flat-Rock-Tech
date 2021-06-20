import React from "react";
import { useLocation } from "react-router";
import classes from "./styles.module.scss";

export default function Index() {
  let location = useLocation();
  let itemId = location.state.itemId;
  return (
    <div className={classes.container}>
      <div className={classes.container_header}>
        <div>
          <div className={classes.container_headerText} >User Setup </div>
        </div>
      </div>
    </div>
  );
}
