import React from "react";

import DeleteIcon from "../../../../assets/Icons/Actions/delete.svg";

const Index = ({ setItemToDelete, item }) => {
  return (
    <button onClick={() => setItemToDelete(item)}>
      <img src={DeleteIcon} alt="Delete" />
    </button>
  );
};

export default Index;
