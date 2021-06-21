import React from "react";

import CloseBtn from "../../../assets/Icons/Actions/close.svg";

import GeneralButton from "../../Buttons/GeneralBtn/Index";
import classes from "./styles.module.scss";

export default function Index({
  item,
  userData,
  setUserData,
  setItemToDelete,
}) {
  const handleUserDelete = () => {
    let newData = [...userData];
    newData.splice(userData.indexOf(item), 1);
    setUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
    setItemToDelete(null);
  };

  return (
    <div className={classes.container}>
      <div className={classes.container_closeic}>
        <img onClick={() => setItemToDelete(null)} src={CloseBtn} alt="" />
      </div>
      <div className="modal-body">
        <h2 className={classes.container_title}>Delete User</h2>
        <div className={classes.container_info}>
          <img src="" alt="" />
          <span>
            {item.firstName} {item.lastName}
          </span>
          <span className="user-status">
            {item.isActive ? "  Active User" : "Inactive User"}
          </span>
        </div>
      </div>
      <div className="moda-footer">
        <GeneralButton
          content="Delete User"
          handleClick={handleUserDelete}
          className={classes.container_deletebtn}
        />
      </div>
    </div>
  );
}
