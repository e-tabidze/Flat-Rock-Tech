import React, { useState, useEffect } from "react";
import Switcher from "../Switcher/Index";
import classes from "./styles.module.scss";

const Index = ({ permGroup, onPermissionActiveClick }) => {
  const [data, setData] = useState({ title: "", items: [] });
  const [treeOpen, toggleTreeOpen] = useState(false);
  const [permGroupActive, togglePermGroup] = useState(false);

  useEffect(() => {
    if (permGroup) createLocalGroup();
  }, [permGroup]);

  const createLocalGroup = () => {
    setData(permGroup);
  };

  const handlePermGroupUpdate = (perm, bool) => {
    let newPermGroup = { ...permGroup };

    let permIndex = newPermGroup.items.indexOf(perm);
    newPermGroup.items[permIndex].isActive = bool;
    setData(newPermGroup);
    onPermissionActiveClick(newPermGroup);
  };

  return (
    <>
      {data.items.length > 0 && <div>
        <h4 className={classes.container_header} onClick={() => toggleTreeOpen(!treeOpen)}>{data.title}</h4>
        <Switcher isActive={permGroupActive} handleToggle={togglePermGroup} />
      </div>}
      <div className={`${classes.container_treeContent} ${treeOpen ? classes.container_treeContent_open : classes.container_treeContent_closed} `}>
        {data.items.map((item) => {
          return (
            <div className={classes.permissionWrapper}>
              <div
                className={`${classes.indicator} ${item.isActive
                  ? `${classes.indicator_enabled}`
                  : `${classes.indicator_disabled}`
                  }`}
              ></div>
              <span>{item.title}</span>
              <Switcher
                perm={item}
                className={classes.permissionWrapper_switcher}
                handleToggle={handlePermGroupUpdate}
                isActive={item.isActive}
                permGroupActive={permGroupActive}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Index;
