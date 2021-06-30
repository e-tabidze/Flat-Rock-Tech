import React, { useState, useEffect } from "react";

import ArrowDownActive from "../../../assets/Icons/Arrows/arrow_down-active.svg";
import ArrowDownInactive from "../../../assets/Icons/Arrows/arrow_down-inactive.svg";

import classes from "./styles.module.scss";

export default function Index({ userData, setFilteredUserData }) {
  const [sortByUser, setSortByUser] = useState(null);
  const [sortByRole, setSortByRole] = useState(null);
  const [sortByStatus, setSortByStatus] = useState(null);

  const [sortID, setSortID] = useState(0);
  const [sortLoading, setSortLoading] = useState(null);

  useEffect(() => {
    if (!sortLoading && sortLoading !== null) {
      handleSortClick();
      setSortLoading(null);
    }
  }, [sortLoading])

  const clearSortings = (id) => {
    setSortLoading(true);
    setSortID(id);
    if (id === 1) {
      setSortByUser(sortByUser !== null ? !sortByUser : true);
      setSortByRole(null);
      setSortByStatus(null);
    } else if (id === 2) {
      setSortByUser(null);
      setSortByRole(sortByRole !== null ? !sortByRole : true);
      setSortByStatus(null);
    } else if (id === 3) {
      setSortByUser(null);
      setSortByRole(null);
      setSortByStatus(sortByStatus !== null ? !sortByStatus : true);
    } else {
      setSortByUser(null);
      setSortByRole(null);
      setSortByStatus(null);
    }
    setSortLoading(false);
  }

  const handleSortClick = () => {
    switch (sortID) {
      case 1:
        handleSortByUser();
        break;
      case 2:
        handleSortByRole()
        break;
      case 3:
        handleSortByStatus()
        break;
      default:
        break;
    }
  }

  const handleSortByUser = () => {
    let asc = [...userData].sort((a, b) =>
      a.firstName > b.firstName ? 1 : -1
    );
    let desc = [...userData].sort((a, b) =>
      a.firstName < b.firstName ? 1 : -1
    );
    setFilteredUserData(sortByUser ? asc : desc);
  };

  const handleSortByRole = () => {
    let sortedByName = [...userData].sort((a, b) =>
      a.firstName < b.firstName ? 1 : -1
    );
    let asc = [...sortedByName].sort((a, b) =>
      a.isAdmin < b.isAdmin ? 1 : -1
    );
    let desc = [...sortedByName].sort((a, b) =>
      a.isAdmin > b.isAdmin ? 1 : -1
    );
    setFilteredUserData(sortByRole ? asc : desc);
  };

  const handleSortByStatus = () => {
    let sortedByName = [...userData].sort((a, b) =>
      a.firstName < b.firstName ? 1 : -1
    );
    let asc = [...sortedByName].sort((a, b) =>
      a.isActive < b.isActive ? 1 : -1
    );
    let desc = [...sortedByName].sort((a, b) =>
      a.isActive > b.isActive ? 1 : -1
    );
    setFilteredUserData(sortByStatus ? asc : desc);
  };

  return (
    <thead className={classes.tableHeader}>
      <tr>
        <th className={classes.tableHeader_col1}>{/* Vacant Place */}</th>
        <th
          className={classes.tableHeader_col2}
          onClick={() => clearSortings(1)}
          style={{ textAlign: "left" }}
        >
          <span>USER</span>
          <img src={ArrowDownActive} alt="" />
        </th>
        <th
          className={classes.tableHeader_col3}
          onClick={() => clearSortings(2)}
        >
          <span>ROLE</span>
          <img src={ArrowDownInactive} alt="" />
        </th>
        <th
          className={classes.tableHeader_col4}
          onClick={() => clearSortings(3)}
        >
          <span>STATUS</span>
          <img src={ArrowDownInactive} alt="" />
        </th>
        <th className={classes.tableHeader_col5}>
          <span>ACTIONS</span>
        </th>
      </tr>
    </thead>
  );
}
