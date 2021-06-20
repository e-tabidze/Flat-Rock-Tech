import React from "react";

import TableCell from "./UserListItem/Index";

const Index = ({
  tableData,
  setFilteredUserData,
  userData,
  setItemToDelete,
}) => {
  return (
    <tbody>
      {tableData.map((item) => {
        return (
          <TableCell
            key={item.id}
            item={item}
            setFilteredUserData={setFilteredUserData}
            userData={userData}
            setItemToDelete={setItemToDelete}
          />
        );
      })}
    </tbody>
  );
};

export default Index;
