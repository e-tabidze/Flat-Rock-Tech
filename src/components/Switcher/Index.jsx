import React, { useState } from "react";

import SwitcherOn from "../../assets/Icons/Switchers/switcher-on.svg";
import SwitcherOff from "../../assets/Icons/Switchers/switcher-off.svg";

export default function Index({ className, perm, toggleUserActive, handleToggle, handlePermGroupUpdate, handleInfoUpdate, toggleAdmin, isActive, permGroupActive, togglePermGroup }) {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    //if(perm && handlePermGroupUpdate) handlePermGroupUpdate(perm, !active);
    //if(handleInfoUpdate) handleInfoUpdate();
    handleToggle(perm, !active);
    setActive(!active);
  }
  return (
    <div className={className} onClick={(() => handleClick())}>
      {active ? (
        <img src={SwitcherOn} alt="Active" />
      ) : (
        <img src={SwitcherOff} alt="Inactive" />
      )}
    </div>
  );
}
