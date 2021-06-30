import React, { useState } from "react";
import Joi from "joi-browser";
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
    firstName: "",
    lastName: "",
    email: "",
  });
  const [formIsValid, setFormIsValid] = useState(false);

  const schema = {
    firstName: Joi.string().min(3).max(50).required().label("First Name"),
    lastName: Joi.string().min(3).max(50).required().label("Last Name"),
    email: Joi.string().email().required().max(255).label("Email"),
    isAdmin: Joi.string().max(50).required().label("Role"),
  };

  // const handleUserInvite = () => {
  //   let newData = [...userData];
  //   newData.push(newUser);
  //   setUserData(newData);
  //   localStorage.setItem("userData", JSON.stringify(newData));
  //   toggleInviteModal(false);
  //   console.log(newUser, newData);
  // };

  const handleUserInvite = (e) => {
    e.preventDefault();

    const demoErrors = handleFormValidation();

    setFieldErrors((prevState) => ({
      ...prevState,
      ["firstName"]: demoErrors ? demoErrors.firstName : null,
      ["lastName"]: demoErrors ? demoErrors.lastName : null,
      ["email"]: demoErrors ? demoErrors.email : null,
    }));

    let newData = [...userData];
    newData.push(newUser);
    setUserData(newData);
    localStorage.setItem("userData", JSON.stringify(newData));
    toggleInviteModal(false);
    console.log(newUser, newData);
  };

  // const handleInputChange = (e) => {
  //   setNewUser((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  //   handleInputValidation(e);
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let errorMessage = handleInputValidation({ name, value });

    if (errorMessage)
      setFieldErrors((prevState) => ({
        ...prevState,
        [name]: errorMessage,
      }));
    else
      setFieldErrors((prevState) => ({
        ...prevState,
        [name]: null,
      }));

    setNewUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const handleInputValidation = (e) => {
  //   if (e.target.value.length === 0) {
  //     setFieldErrors((prevState) => ({
  //       ...prevState,
  //       [e.target.name]: false,
  //     }));
  //   } else {
  //     setFieldErrors((prevState) => ({
  //       ...prevState,
  //       [e.target.name]: true,
  //     }));
  //   }
  //   handleFormValidation();
  // };

  const handleInputValidation = ({ name, value }) => {
    let obj = { [name]: value };
    let demoSchema = { [name]: schema[name] };

    const { error } = Joi.validate(obj, demoSchema);

    return error ? error.details[0].message : null;
  };

  // const handleFormValidation = () => {
  //   for (const property in fieldErrors) {
  //     if (!property) {
  //       return setFormIsValid(false);
  //     } else {
  //       setFormIsValid(true);
  //     }
  //   }
  // };

  const handleFormValidation = () => {
    const result = Joi.validate(newUser, schema, { abortEarly: false });

    if (!result.error) return null;
    !result.error && setFormIsValid(true);

    const errors = {};
    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
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
          <div className={classes.container_namefield}>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="* First Name"
              onChange={(e) => handleInputChange(e)}
              className={classes.container_input_firstname}
              error={fieldErrors.firstName}
            />
            {fieldErrors && <div>{fieldErrors.firstName}</div>}
          </div>

          <div className={classes.container_namefield}>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="* Last Name"
              onChange={(e) => handleInputChange(e)}
              className={classes.container_input_lastName}
            />
            {fieldErrors && <div>{fieldErrors.lastName}</div>}
          </div>
        </div>
        <div className={classes.container_emailfield}>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="* Email"
            onChange={(e) => handleInputChange(e)}
            className={classes.container_input_email}
          />
          {fieldErrors && <div>{fieldErrors.email}</div>}
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
