import React from "react";
import { Switch, useLocation } from "react-router";
import classes from "./styles.module.scss";
import profileimg from "../../assets/Icons/General/profile-active.svg";
import settingsIcon from "../../assets/Icons/Actions/settings.svg";
import adminKey from "../../assets/Icons/General/admin-icon-active.svg";
import Switcher from "../../components/Switcher/Index";

export default function Index() {
  let location = useLocation();
  let firstName = location.state.firstName;
  let lastName = location.state.lastName;
  let email = location.state.email;
  let role = location.state.role;

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
              src={profileimg}
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
          <div className={classes.container_content_scolumn_switcher}>
            <Switcher isActive={true} />
          </div>
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
        <div></div>
      </div>
    </div>
  );
}
