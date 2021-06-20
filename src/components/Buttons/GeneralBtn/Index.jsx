import React from "react";

const Index = ({ content, handleClick, className, disabled }) => {
  return (
    <button disabled={disabled ? disabled : false} onClick={handleClick} className={`general-btn_container ${className}`}>
      {content}
    </button>
  );
};

export default Index;
