import React from "react";
import { Link } from "react-router-dom";

const BackButton = props => {
  return (
    <Link to="/">
      <button onClick={props.syncSearch} className="close-search">
        Close
      </button>
    </Link>
  );
};

export default BackButton;
