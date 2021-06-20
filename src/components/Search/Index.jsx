import React from "react";

import SearchIcon from "../../assets/Icons/Actions/search.svg";

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
    <div className="search-container">
      <input
        type="text"
        placeholder="Type to filter the table"
        onChange={handleSearchChange}
      />
      <img src={SearchIcon} alt="Search Icon" />
    </div>
  );
};

export default Index;
