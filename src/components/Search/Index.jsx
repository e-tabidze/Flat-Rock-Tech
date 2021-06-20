import React from "react";

import SearchIcon from "../../assets/Icons/Actions/search.svg";
import classes from './styles.module.scss';

const Index = ({ data, setFilteredUserData }) => {

  const handleSearchChange = (e) => {
    let filteredArray = data.filter(
      (item) =>
        item.firstName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.lastName.toLowerCase().includes(e.target.value.toLowerCase()) ||
        item.email.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredUserData(filteredArray);
  };

  return (
    <div className={classes.searchContainer}>
      <input
        type="text"
        className={classes.searchContainer_input}
        placeholder="Type to filter the table"
        onChange={handleSearchChange}
      />
      <img src={SearchIcon} alt="Search Icon" />
    </div>
  );
};

export default Index;
