import React from "react";

import CloseBtn from "../../../assets/Icons/Actions/close.svg";

import GeneralButton from "../../Buttons/GeneralBtn/Index";

export default function Index({ item, userData, setUserData, setItemToDelete }) {
  const handleUserDelete = () => {
    let newData = [...userData];
    newData.splice(userData.indexOf(item), 1);
    setUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
    setItemToDelete(null);
  };

  return (
    <div className="delete-modal_container">
      <div className="modal-head">
        <div onClick={() => setItemToDelete(null)}>
          <img src={CloseBtn} alt="" />
        </div>
      </div>
      <div className="modal-body">
        <h2>Delete User</h2>
        <div className="user-info">
          <img src="" alt="" />
          <span>
            {item.firstName} {item.lastName}
          </span>
          <span className="user-status">
            {item.isActive ? "Active User" : "Inactive User"}
          </span>
        </div>
      </div>
      <div className="moda-footer">
        <GeneralButton
          content="Delete User"
          handleClick={handleUserDelete}
          className="delete-btn"
        />
      </div>
    </div>
  );
}
