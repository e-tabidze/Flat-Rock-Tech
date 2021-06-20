import React from "react";

import ArrowDownActive from "../../../assets/Icons/Arrows/arrow_down-active.svg";
import ArrowDownInactive from "../../../assets/Icons/Arrows/arrow_down-inactive.svg";

import classes from "./styles.module.scss";

export default function Index({ userData, setFilteredUserData }) {
  const handleSortByUser = () => {
    let sortedData = [...userData].sort((a, b) =>
      a.firstName > b.firstName ? 1 : -1
    );
    setFilteredUserData(sortedData);
  };

  const handleSortByRole = () => {
    let sortedByName = [...userData].sort((a, b) =>
      a.firstName < b.firstName ? 1 : -1
    );
    let sortedData = [...sortedByName].sort((a, b) =>
      a.isAdmin < b.isAdmin ? 1 : -1
    );
    setFilteredUserData(sortedData);
  };

  const handleSortByStatus = () => {
    let sortedByName = [...userData].sort((a, b) =>
      a.firstName < b.firstName ? 1 : -1
    );
    let sortedData = [...sortedByName].sort((a, b) =>
      a.isActive < b.isActive ? 1 : -1
    );
    setFilteredUserData(sortedData);
  };

  return (
    <thead className={classes.tableHeader}>
      <tr>
        <th className={classes.tableHeader_col1}>{/* Vacant Place */}</th>
        <th  className={classes.tableHeader_col2} onClick={() => handleSortByUser()} style={{textAlign: "left"}}>
          <span>USER</span>
          <img src={ArrowDownActive} alt="" />
        </th>
        <th  className={classes.tableHeader_col3} onClick={() => handleSortByRole()}>
          <span>ROLE</span>
          <img src={ArrowDownInactive} alt="" />
        </th>
        <th  className={classes.tableHeader_col4} onClick={() => handleSortByStatus()}>
          <span>STATUS</span>
          <img src={ArrowDownInactive} alt="" />
        </th>
        <th  className={classes.tableHeader_col5}>
          <span>ACTIONS</span>
        </th>
      </tr>
    </thead>
  );
}
