import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import classes from "./styles.module.scss";
import profileimg from "../../assets/Icons/General/profile-active.svg";
import profileInactive from "../../assets/Icons/General/profile-inactive.svg";
import settingsIcon from "../../assets/Icons/Actions/settings.png";
import adminKey from "../../assets/Icons/General/admin-icon-active.svg";
import Switcher from "../../components/Switcher/Index";
import DropDown from "../../components/Dropdown/Index";

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
    console.log(newData, " [NEW DATA]");
    localStorage.setItem("userData", JSON.stringify(newData));
  };

  const toggleAdmin = (bool) => {
    let newUserObj = {...user};
    let newData = [...userData];
    newUserObj.isAdmin = bool;
    newData[newData.indexOf(user)] = newUserObj;
    localStorage.setItem("userData", JSON.stringify(newData));
    setUser(newUserObj);
  }

  const toggleUserActive = (bool) => {
    let newUserObj = {...user};
    let newData = [...userData];
    newUserObj.isActive = bool;
    newData[newData.indexOf(user)] = newUserObj;
    localStorage.setItem("userData", JSON.stringify(newData));
    setUser(newUserObj);
  }

  return (
    <div className={classes.container}>
      <div className={classes.container_header}>
        <div className={classes.container_header_headerText}>User Setup </div>
        <img className={classes.container_header_settings} src={settingsIcon} />
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
              handleToggle={toggleUserActive}
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
            <Switcher isActive={user.isAdmin} handleToggle={toggleAdmin}  />
          </div>}
          {user &&
            user.permissions.map((permGroup) => {
              return (
                <>
                  <DropDown
                    permGroup={permGroup}
                    onPermissionActiveClick={onPermissionActiveClick}
                  />
                 {permGroup.items.length > 0 && <div className={classes.container_content_tcolumn_dividingLine}></div>}
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
