import React from "react";

import ProfileIconActive from "../../../../assets/Icons/General/profile-active.svg";
import ProfileIconInactive from "../../../../assets/Icons/General/profile-inactive.svg";

import UserAdminActive from "../../../../assets/Icons/General/admin-icon-active.svg";
import UserAdminInactive from "../../../../assets/Icons/General/admin-icon-inactive.svg";

import Switcher from "../../../Switcher/Index";
import SettingsBtn from "../../../Buttons/ActionBtn/SettingsBtn/Index";
import DeleteBtn from "../../../Buttons/ActionBtn/DeleteBtn/Index";

export default function Index({ item, setFilteredUserData, userData, setItemToDelete }) {
  const handleProfileActiveClick = () => {
    let newData = [...userData];
    newData[newData.indexof(item)].isActive = !item.isActive;
    setFilteredUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
  };
  return (
    <tr>
      <td>
        <img
          src={item.isActive ? ProfileIconActive : ProfileIconInactive}
          alt=""
        />
      </td>
      <td>
        <div className="table-cell_info">
          <span className="cell-info_fullName">{`${item.firstName} ${item.lastName}`}</span>
          <span className="cell-info_email">{item.email}</span>
        </div>
      </td>
      <td>
        {item.isAdmin ? (
          <div>
            <img
              src={item.isActive ? UserAdminActive : UserAdminInactive}
              alt=""
            />{" "}
            <span>Admin</span>{" "}
          </div>
        ) : (
          <span>User</span>
        )}
      </td>
      <td>
        <Switcher
          handleClick={handleProfileActiveClick}
          isActive={item.isActive}
        />
      </td>
      <td>
        <SettingsBtn id={item.id} />
        <DeleteBtn setItemToDelete={setItemToDelete} item={item} />
      </td>
    </tr>
  );
}
