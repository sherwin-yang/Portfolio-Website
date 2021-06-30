import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Name() {
  return (
    <div className="column-center-horizontally name-component">
      <h1 className="name name-title-size">Sherwin Yang</h1>
      <h3 className="name name-subtitle-size">
        <FontAwesomeIcon icon={["fab", "swift"]} /> iOS Developer
      </h3>
    </div>
  );
}

export default Name;
