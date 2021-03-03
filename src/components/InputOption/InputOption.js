import React from "react";
import "./InputOption.css";

const InputOption = ({ title, Icon, color, onClick }) => {
  return (
    <div onClick={onClick} className="inputOption">
      {Icon && <Icon style={{ color: color }} />}
      <h5>{title}</h5>
    </div>
  );
};

export default InputOption;
