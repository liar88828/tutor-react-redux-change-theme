import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/Theme";

export const ChangeColor = () => {
  const [color, setColor] = useState("");
  const disPatch = useDispatch();

  return (
    <div>
      <input type="text" onChange={(e) => setColor(e.target.value)} />
      <button onClick={() => disPatch(changeColor(color))}>Change Color</button>
    </div>
  );
};
