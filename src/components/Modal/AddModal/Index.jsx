import React, { useState } from "react";

import CloseBtn from "../../../assets/Icons/Actions/close.svg";
import GeneralButton from "../../Buttons/GeneralBtn/Index";

const Index = ({ userData, setUserData, toggleInviteModal }) => {
  const [newUser, setNewUser] = useState({
    id: userData[userData.length - 1].id + 1,
    firstName: null,
    lastName: null,
    email: null,
    isAdmin: false,
    isActive: true,
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
      for(const property in fieldErrors){
          if(!property) {
              console.log('aeeeee')
            return setFormIsValid(false);
          } else {
            setFormIsValid(true);
          }
      }
  }

  return (
    <div className="add-modal_container">
      <div className="modal-head">
        <div onClick={() => toggleInviteModal(false)}>
          <img src={CloseBtn} alt="" />
        </div>
      </div>
      <div className="modal-body">
        <h2>Invite New User</h2>
        <div className="user-fullName">
          <img src="" alt="" />
          <div className="user-firstName">
            <label
              className={`invite-input-label ${
                fieldErrors.firstName ? "input-valid" : "input-invalid"
              }`}
              htmlFor="firstName"
            >
              {newUser.firstName && "* First Name"}
            </label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              placeholder="* First Name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="user-lastName">
            <label
              className={`invite-input-label ${
                fieldErrors.lastName ? "input-valid" : "input-invalid"
              }`}
              htmlFor="lastName"
            >
              {newUser.lastName && "* Last Name"}
            </label>
            <input
              id="lastName"
              type="text"
              name="lastName"
              placeholder="* Last Name"
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
        <div className="user-email">
          <label
            className={`invite-input-label ${
              fieldErrors.email ? "input-valid" : "input-invalid"
            }`}
            htmlFor="email"
          >
            {newUser.email && "* Email"}
          </label>

          <input
            id="email"
            type="email"
            name="email"
            placeholder="* Email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="user-role">
          <label
            className={`invite-input-label ${
              fieldErrors.isAdmin ? "input-valid" : "input-invalid"
            }`}
            htmlFor="role"
          >
            {newUser.isAdmin && "* Role"}
          </label>

          <select
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
      <div className="moda-footer">
        <GeneralButton
          content="Send Invitation"
          handleClick={handleUserInvite}
          className="invite-btn"
          disabled={!formIsValid}
        />
        <span className={`error-handling ${formIsValid ? "error-handling-valid" : "error-handling-invalid"}`}>
            {formIsValid ? "Good to go" : "Fill in all the fields"}
        </span>
      </div>
    </div>
  );
};

export default Index;
