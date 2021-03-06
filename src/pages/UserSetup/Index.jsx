import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from 'react-router-dom';
import classes from "./styles.module.scss";
import profileimg from "../../assets/Icons/General/profile-active.svg";
import profileInactive from "../../assets/Icons/General/profile-inactive.svg";
import SettingsIcon from "../../assets/Icons/Actions/settings-white.svg";
import adminKey from "../../assets/Icons/General/admin-icon-active.svg";
import Switcher from "../../components/Switcher/Index";
import DropDown from "../../components/Dropdown/Index";

import BackIcon from '../../assets/Icons/Arrows/circled-left.png';

export default function Index({ dataIsSet }) {
  const [userData, setUserData] = useState([]);
  const [userActive, setUserActive] = useState(false);
  const [user, setUser] = useState(null);

  let location = useLocation();
  let firstName = location.state.firstName;
  let lastName = location.state.lastName;
  let email = location.state.email;
  let role = location.state.role;

  useEffect(() => {
    if (dataIsSet) handleGetUserData();
  }, [dataIsSet]);

  const handleGetUserData = () => {
    let dataToSet = JSON.parse(localStorage.getItem("userData"));
    if (dataToSet) {
      let userObj = dataToSet.filter(
        (item) => item.id === location.state.itemId
      );
      setUser(userObj[0]);
      setUserData(dataToSet);
    }
  };

  const onPermissionActiveClick = (permGroup) => {
    let newData = [...userData];
    newData[newData.indexOf(user)].permissions.items = permGroup;
    let userObj = newData.filter((item) => item.id === location.state.itemId);
    setUser(userObj[0]);
    setUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
  };

  const toggleAdmin = (bool) => {
    let newUserObj = { ...user };
    let newData = [...userData];
    newUserObj.isAdmin = bool;
    newData[newData.indexOf(user)] = newUserObj;
    localStorage.setItem("userData", JSON.stringify(newData));
    setUserData(newData);
    setUser(newUserObj);
  }

  const toggleUserActive = (bool) => {
    let newUserObj = { ...user };
    let newData = [...userData];
    newUserObj.isActive = bool;
    newData[newData.indexOf(user)] = newUserObj;
    localStorage.setItem("userData", JSON.stringify(newData));
    setUser(newUserObj);
  }

  return (
    <div className={classes.container}>
      <div className={classes.container_header}>
        <Link to="/" ><img className={classes.container_header_backBtn} src={BackIcon} alt="" /></Link>
        <div className={classes.container_header_headerText}>User Setup </div>
        <div className={classes.container_header_settingsWrapper}>
          <img className={classes.container_header_settingsWrapper_settings} src={SettingsIcon} />
        </div>
      </div>
      <div className={classes.container_content}>
        <div className={classes.container_content_fcolumn}>
          <div>
            <img
              className={classes.container_content_fcolumn_img}
              src={userActive ? profileimg : profileInactive}
            />
            <img src={adminKey} />
          </div>

          <div className={classes.container_content_fcolumn_uploadtext}>
            UPLOAD A PHOTO
          </div>
          <h1>
            <span> {firstName} </span>
            <span> {lastName} </span>
          </h1>
          <div className={classes.container_content_fcolumn_email}>{email}</div>
          <button className={classes.container_content_fcolumn_button}>
            Resend The Invite
          </button>
        </div>

        <div className={classes.container_content_scolumn}>
          <h1 className={classes.container_content_scolumn_header}>Details</h1>
          {user && <div className={classes.container_content_scolumn_switcher}>
            <Switcher
              toggleUserActive={toggleUserActive}
              isActive={user.isActive}
            />
          </div>}
          <div>
            <div>
              The user is <span>Active</span>
            </div>
            <div className={classes.container_content_scolumn_infosec}>
              <div className={classes.container_content_scolumn_info}>
                * First Name
              </div>
              <input
                className={classes.container_content_scolumn_input}
                placeholder={firstName}
              />
              <div className={classes.container_content_scolumn_info}>
                * Last Name
              </div>
              <input
                className={classes.container_content_scolumn_input}
                placeholder={lastName}
              />
              <div className={classes.container_content_scolumn_info}>
                * Role
              </div>
              <div>{role}</div>
            </div>
            <button className={classes.container_content_scolumn_button}>
              Save Changes
            </button>
          </div>
        </div>
        <div className={classes.container_content_tcolumn}>
          <h1 className={classes.container_content_tcolumn_header}>
            Permissions
          </h1>
          {user && <div className={classes.container_content_tcolumn_superAdmin}>
            <h2>Super Admin</h2>
            <Switcher isActive={user.isAdmin} toggleAdmin={toggleAdmin} permissionsActive={true} />
          </div>}
          {user &&
            user.permissions.map((permGroup) => {
              return (
                <div key={permGroup.id} style={{ width: "100%" }}>
                  <DropDown
                    permGroup={permGroup}
                    onPermissionActiveClick={onPermissionActiveClick}
                  />
                  {permGroup.items.length > 0 && <div className={classes.container_content_tcolumn_dividingLine}></div>}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
