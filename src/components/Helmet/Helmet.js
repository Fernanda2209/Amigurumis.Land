import React from "react";

const Helmet = (props) => {
  document.title = "Amigurumis Land  - " + props.title;
  return <div className="w-100">{props.children}</div>;
};

export default Helmet;
