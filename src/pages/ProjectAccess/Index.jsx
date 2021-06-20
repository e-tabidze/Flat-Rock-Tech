import React, { useState, useEffect } from "react";

import Search from "../../components/Search/Index";

import TableHeader from "../../components/Table/TableHead/Index";
import TableBody from "../../components/Table/TableBody/Index";

import DeleteModal from "../../components/Modal/DeleteModal/Index";
import AddModal from "../../components/Modal/AddModal/Index";

import AddBtn from "../../components/Buttons/AddBtn/Index";

const Index = ({ dataIsSet }) => {
  const [userData, setUserData] = useState([]);
  const [filteredUserData, setFilteredUserData] = useState([]);
  const [itemToDelete, setItemToDelete] = useState(null);
  const [inviteModalActive, toggleInviteModal] = useState(false);

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

  return (
    <div className="page-container">
      <div className="page-header">
        <span className="page-name">Project Access</span>
        <Search data={userData} setFilteredUserData={setFilteredUserData} />
      </div>
      <div className="page-body">
        <AddBtn handleClick={toggleInviteModal} />
        <table className="user-table">
          <TableHeader
            userData={filteredUserData}
            setFilteredUserData={setFilteredUserData}
          />
          <TableBody
            tableData={filteredUserData}
            setFilteredUserData={setFilteredUserData}
            userData={userData}
            setItemToDelete={setItemToDelete}
          />
        </table>
      </div>
      <div className="modals-container">
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
