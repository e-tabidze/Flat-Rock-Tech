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
    newData[newData.indexOf(item)].isActive = !item.isActive;
    setFilteredUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
  };

  return (
    <tr className={classes.container}>
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
              className={
                item.isActive
                  ? classes.container_keyimg_active
                  : classes.container_keyimg
              }
              src={item.isActive ? UserAdminActive : UserAdminInactive}
              alt=""
            />
            <span className={classes.container_roletext}>Admin</span>
          </div>
        ) : (
          <span className={classes.container_usertext}>User</span>
        )}
      </td>
      <td className={classes.container_switcher}>
        <Switcher
          handleInfoUpdate={handleProfileActiveClick}
          isActive={item.isActive}
          permissionsActive={true}
        />
      </td>
      <td className={classes.container_td}>
        <SettingsBtn
          id={item.id}
          lastName={item.lastName}
          firstName={item.firstName}
          email={item.email}
          role={item.isAdmin}
        />
        <DeleteBtn setItemToDelete={setItemToDelete} item={item} />
      </td>
    </tr>
  );
}
