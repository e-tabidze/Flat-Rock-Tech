import React from "react";
import classes from "./styles.module.scss";
import ArrowDownActive from "../../../assets/Icons/Arrows/arrow_down-active.svg";
import ArrowDownInactive from "../../../assets/Icons/Arrows/arrow_down-inactive.svg";

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
    <thead>
      <tr>
        <th>{/* Vacant Place */}</th>
        <th onClick={() => handleSortByUser()}>
          <span>USER</span>
          <img src={ArrowDownActive} alt="" />
        </th>
        <th onClick={() => handleSortByRole()}>
          <span>ROLE</span>
          <img src={ArrowDownInactive} alt="" />
        </th>
        <th onClick={() => handleSortByStatus()}>
          <span>STATUS</span>
          <img src={ArrowDownInactive} alt="" />
        </th>
        <th>
          <span>ACTIONS</span>
        </th>
      </tr>
    </thead>
  );
}
