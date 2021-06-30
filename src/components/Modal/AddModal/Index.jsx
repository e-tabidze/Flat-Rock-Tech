import React, { useState } from "react";

import CloseBtn from "../../../assets/Icons/Actions/close.svg";
import GeneralButton from "../../Buttons/GeneralBtn/Index";
import classes from "./styles.module.scss";

const Index = ({ userData, setUserData, toggleInviteModal }) => {
  const userPermissions = [
    {
      id: `user-${userData.length + 1}-permission-group-1`,
      title: "Permission Group 1",
      permissionsActive: true,
      items: [
        {
          id: `user-${userData.length + 1}-permission-group-1-item-1`,
          isActive: true,
          title: "Permission 11",
        },
        {
          id: `user-${userData.length + 1}-permission-group-1-item-2`,
          isActive: false,
          title: "Permission 12",
        },
        {
          id: `user-${userData.length + 1}-permission-group-1-item-3`,
          isActive: true,
          title: "Permission 13",
        },
      ],
    },
    {
      id: `user-${userData.length + 1}-permission-group-2`,
      title: "Permission Group 2",
      permissionsActive: false,
      items: [],
    },
    {
      id: `user-${userData.length + 1}-permission-group-3`,
      title: "Permission Group 3",
      permissionsActive: true,
      items: [
        {
          id: `user-${userData.length + 1}-permission-group-3-item-1`,
          isActive: true,
          title: "Permission 16",
        },
        {
          id: `user-${userData.length + 1}-permission-group-2-item-2`,
          isActive: false,
          title: "Permission 11",
        },
        {
          id: `user-${userData.length + 1}-permission-group-2-item-3`,
          isActive: true,
          title: "Permission 11",
        },
        {
          id: `user-${userData.length + 1}-permission-group-1-item-4`,
          isActive: true,
          title: "Permission 11",
        },
      ],
    },
  ];
  const [newUser, setNewUser] = useState({
    id: userData[userData.length - 1].id + 1,
    firstName: null,
    lastName: null,
    email: null,
    isAdmin: false,
    isActive: true,
    permissions: userPermissions,
  });
  const [fieldErrors, setFieldErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const handleUserInvite = () => {
    let newData = [...userData];
    newData.push(newUser);
    setUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
    toggleInviteModal(false);
    console.log(newUser, newData);
  };

  const handleInputChange = (e) => {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    handleInputValidation(e);
  };

  const handleInputValidation = (e) => {
    if (e.target.value.length === 0) {
      setFieldErrors((prevState) => ({
        ...prevState,
        [e.target.name]: false,
      }));
    } else {
      setFieldErrors((prevState) => ({
        ...prevState,
        [e.target.name]: true,
      }));
    }
    handleFormValidation();
  };

  const handleFormValidation = () => {
    for (const property in fieldErrors) {
      if (!property) {
        return setFormIsValid(false);
      } else {
        setFormIsValid(true);
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.container_header}>
        <img onClick={() => toggleInviteModal(false)} src={CloseBtn} alt="" />
      </div>
      <div className={classes.container_modalbody}>
        <h2 className={classes.container_title}>Invite New User</h2>
        <div className={classes.container_name}>
          <img src="" alt="" />

          <input
            id="firstName"
            type="text"
            name="firstName"
            placeholder="* First Name"
            onChange={(e) => handleInputChange(e)}
            className={classes.container_input_firstname}
          />

          <input
            id="lastName"
            type="text"
            name="lastName"
            placeholder="* Last Name"
            onChange={(e) => handleInputChange(e)}
            className={classes.container_input_lastName}
          />
        </div>
        <div className="user-email">
          <input
            id="email"
            type="email"
            name="email"
            placeholder="* Email"
            onChange={(e) => handleInputChange(e)}
            className={classes.container_input_email}
          />
        </div>
        <div className="user-role">
          <select
            className={classes.container_input_role}
            id="role"
            name="isAdmin"
            defaultValue={0}
            onChange={(e) => handleInputChange(e)}
          >
            <option value={false}>User</option>
            <option value={true}>Admin</option>
          </select>
        </div>
      </div>
      <div className={classes.container_modalaction}>
        <GeneralButton
          content="Send Invitation"
          handleClick={handleUserInvite}
          className={classes.container_invitebtn}
          disabled={!formIsValid}
        />
        <span
          className={`error-handling ${
            formIsValid ? "error-handling-valid" : "error-handling-invalid"
          }`}
        >
          {formIsValid ? "Good to go" : "Fill in all the fields"}
        </span>
      </div>
    </div>
  );
};

export default Index;
