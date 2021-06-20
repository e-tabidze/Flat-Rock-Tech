import React from "react";
import classes from "./styles.module.scss";
import ProfileIconActive from "../../../../assets/Icons/General/profile-active.svg";
import ProfileIconInactive from "../../../../assets/Icons/General/profile-inactive.svg";

import UserAdminActive from "../../../../assets/Icons/General/admin-icon-active.svg";
import UserAdminInactive from "../../../../assets/Icons/General/admin-icon-inactive.svg";

import Switcher from "../../../Switcher/Index";
import SettingsBtn from "../../../Buttons/ActionBtn/SettingsBtn/Index";
import DeleteBtn from "../../../Buttons/ActionBtn/DeleteBtn/Index";

export default function Index({
  item,
  setFilteredUserData,
  userData,
  setItemToDelete,
}) {
  const handleProfileActiveClick = () => {
    let newData = [...userData];
    console.log(userData, newData, item);
    newData[newData.indexOf(item)].isActive = !item.isActive;
    setFilteredUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
  };
  return (
    <tr>
      <td>
        <img
          className={classes.container_img}
          src={item.isActive ? ProfileIconActive : ProfileIconInactive}
          alt=""
        />
      </td>
      <td>
        <div className={classes.container_info}>
          <span
            className={classes.container_info_fullname}
          >{`${item.firstName} ${item.lastName}`}</span>
          <span className={classes.container_info_email}>{item.email}</span>
        </div>
      </td>
      <td>
        {item.isAdmin ? (
          <div className={classes.container_roleinfo}>
            <img
              src={item.isActive ? UserAdminActive : UserAdminInactive}
              alt=""
            />
            <span>Admin</span>
          </div>
        ) : (
          <span>User</span>
        )}
      </td>
      <td className={classes.container_switcher}>
        <Switcher
          handleClick={handleProfileActiveClick}
          isActive={item.isActive}
        />
      </td>
      <td>
        <SettingsBtn
          id={item.id}
          lastName={item.lastName}
          firstName={item.firstName}
          email={item.email}
        />
        <DeleteBtn setItemToDelete={setItemToDelete} item={item} />
      </td>
    </tr>
  );
}
