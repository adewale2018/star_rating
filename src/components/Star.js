import React from "react";

const Star = (props) => {
  console.log("PROPS>>", props);
  const { color, value, handleHover, handleHoverLeave, handleClick, isFilled } =
    props;
  if (!handleHover) {
    return (
      <span
        className="star"
        style={{ color }}
        onMouseEnter={() => console.log("Mouse Enter")}
        onMouseLeave={() => console.log("Mouse Leave")}
        onClick={() => alert("You Clicked me!")}
      >
        {isFilled ? "★" : "☆"}
      </span>
    );
  }
  return (
    <span
      className="star"
      style={{ color }}
      onMouseEnter={() => handleHover(value)}
      onMouseLeave={() => handleHoverLeave(value)}
      onClick={() => handleClick(value)}
    >
      {isFilled ? "★" : "☆"}
    </span>
  );
};

export default Star;
