import React, { useState } from "react";

import SwitcherOn from "../../assets/Icons/Switchers/switcher-on.svg";
import SwitcherOff from "../../assets/Icons/Switchers/switcher-off.svg";

export default function Index({ className, perm, toggleGroupPerms, toggleUserActive, handlePermGroupUpdate, handleInfoUpdate, toggleAdmin, isActive, permissionsActive, isPermToggler }) {
  const [active, setActive] = useState(isActive);

  const handleClick = () => {
    if(!permissionsActive) {
      if(!isPermToggler){
        return
      }
    }
    if(perm && handlePermGroupUpdate) handlePermGroupUpdate(perm, !active);
    if(handleInfoUpdate) handleInfoUpdate();
    if(toggleAdmin) toggleAdmin(!active);
    if(toggleUserActive) toggleUserActive(!active);
    if(toggleGroupPerms) toggleGroupPerms(!active);
    setActive(!active);
  }
  return (
    <div className={className} onClick={() => handleClick()}>
      {active ? (
        <img src={SwitcherOn} alt="Active" />
      ) : (
        <img src={SwitcherOff} alt="Inactive" />
      )}
    </div>
  );
}
