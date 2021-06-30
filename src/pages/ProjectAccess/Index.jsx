import React, { useState, useEffect } from "react";

import Search from "../../components/Search/Index";
import Pagination from "../../components/Pagination/Index";
import { paginate } from "../../Utils/paginate";

import TableHeader from "../../components/Table/TableHead/Index";
import TableBody from "../../components/Table/TableBody/Index";

import DeleteModal from "../../components/Modal/DeleteModal/Index";
import AddModal from "../../components/Modal/AddModal/Index";

import AddBtn from "../../components/Buttons/AddBtn/Index";
import classes from "./styles.module.scss";

const Index = ({ dataIsSet }) => {
  const [userData, setUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [inviteModalActive, toggleInviteModal] = useState(false);

  const pageSize = 4;

  // const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (dataIsSet) handleGetUserData();
  }, [dataIsSet]);

  useEffect(() => {
    if (userData.length > 0) {
      setFilteredUserData(userData);
    }
  }, [userData]);

  const handleGetUserData = () => {
    let dataToSet = JSON.parse(localStorage.getItem("userData"));
    if (dataToSet) {
      setUserData(dataToSet);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={classes.container}>
      <div className={classes.container_header}>
        <span className={classes.container_pagename}>Project Access</span>
        <Search data={userData} setFilteredUserData={setFilteredUserData} />
      </div>
      <div className={classes.container_pagebody}>
        <AddBtn handleClick={toggleInviteModal} />
        <table className={classes.container_usertable}>
          <TableHeader
            userData={filteredUserData}
            setFilteredUserData={setFilteredUserData}
          />
          <TableBody
            tableData={paginate(filteredUserData, currentPage, pageSize)}
            setFilteredUserData={setFilteredUserData}
            userData={userData}
            setItemToDelete={setItemToDelete}
          />
        </table>
        <div className={classes.container_pagination}>
          {userData.length > 4 && <div>Records on page 4</div>}

          {userData && (
            <Pagination
              itemsCount={filteredUserData.length}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
      <div className={classes.container_modal}>
        {itemToDelete && (
          <DeleteModal
            userData={userData}
            setUserData={setUserData}
            setFilteredUserData={setFilteredUserData}
            item={itemToDelete}
            setItemToDelete={setItemToDelete}
          />
        )}
        {inviteModalActive && (
          <AddModal
            userData={userData}
            setUserData={setUserData}
            setFilteredUserData={setFilteredUserData}
            toggleInviteModal={toggleInviteModal}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
