import React from "react";

import SwitcherOn from "../../assets/Icons/Switchers/switcher-on.svg";
import SwitcherOff from "../../assets/Icons/Switchers/switcher-off.svg";

export default function Index({ isActive, handleClick, text }) {
  return (
    <div onClick={() => handleClick()}>
      {text && <span> {text} </span>}
      {isActive ? (
        <img src={SwitcherOn} alt="Active" />
      ) : (
        <img src={SwitcherOff} alt="Inactive" />
      )}
    </div>
  );
}
