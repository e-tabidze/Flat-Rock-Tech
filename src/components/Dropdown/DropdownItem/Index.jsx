import React from 'react';

import Switcher from '../../Switcher/Index';
const Index = ({item,userData,setFilteredUserData}) => {
    const handleProfileActiveClick = () => {
        let newData = [...userData];
        console.log(userData, newData, item);
        newData[newData.indexOf(item)].isActive = !item.isActive;
        setFilteredUserData(newData);
        localStorage.setItem("userData", JSON.stringify(newData));
      };
    return (  
    <div key={item.id}>
        <div></div>
        <span>{item.name}</span>
        <Switcher isActive={item.isActive} handleClick={} />
    </div> 
    );
}
 
export default Index;