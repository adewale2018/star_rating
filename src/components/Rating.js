import React, { useState } from "react";
import Star from "./Star";

const Rating = (props) => {
  const [value, setValue] = useState(0);
  const [dynamicValue, setDynamicValue] = useState(props.stars);

  const colors = {
    1: "#F44336",
    2: "#FF5722",
    3: "#FF9800",
    4: "#FFC107",
    5: "#FFEB3B",
  };

  const meanings = {
    0: "No Rating 🚫",
    1: "Terrible 🤮",
    2: "Mediocre 😒",
    3: "Average 😐",
    4: "Solid 🙂",
    5: "Fantastic 🔥",
  };

  const handleClick = (newValue) => {
    setValue(newValue);
    setDynamicValue(newValue);
  };

  const handleMouseEnter = (newValue) => {
    setDynamicValue(newValue);
  };

  const handleMouseLeave = () => {
    setDynamicValue(value);
  };

  const starSpans = [];
  const max = props.max; // number of stars = 5
  let count = dynamicValue;
  for (let v = 1; v <= max; v++) {
    starSpans.push(
      <Star
        key={v}
        color={colors[count]}
        isFilled={v <= dynamicValue}
        value={v}
        handleClick={handleClick}
        handleHover={handleMouseEnter}
        handleHoverLeave={handleMouseLeave}
      />
    );
  }
  return (
    <div>
      <p>{meanings[value]}</p>
      {starSpans}
    </div>
  );
};

Rating.defaultProps = {
  max: 5,
};
export default Rating;
