import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { categoryMenuItems } from "../lib/constants";
import { difficultyMenuItems } from "../lib/constants";
import { limitMenuItems } from "../lib/constants";
import { tagsMenuItems } from "../lib/constants";

const CustomDropDown = ({ type, setValue }) => {
  const [menuItems, setMenuItems] = useState([]);

  //   Set the selected item
  const handleChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    if (type === "category") {
      setMenuItems(categoryMenuItems);
    } else if (type === "difficulty") {
      setMenuItems(difficultyMenuItems);
    } else if (type === "limit") {
      setMenuItems(limitMenuItems);
    } else if (type === "tags") {
      setMenuItems(tagsMenuItems);
    }
  }, []);
  return (
    <Select
      variant="borderless"
      defaultValue="Default"
      style={{
        width: 120,
        background: "#ABC241",
        color: "#fff",
        borderRadius: "5px",
      }}
      onChange={handleChange}
      options={menuItems}
    />
  );
};

export default CustomDropDown;
