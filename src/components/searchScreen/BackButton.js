import React from "react";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <button className="close-search">Close</button>
    </Link>
  );
};

export default BackButton;
