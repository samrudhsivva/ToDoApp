import { useState } from "react";

export function FavoriteColor() {
  const [color, setColor] = useState("red");

  const colorHandler = () => {
    setColor("blue");
  };

  return (
    <>
      <h1>
        My favorite color is <span data-testid="color">{color}</span>!
      </h1>
      <button type="button" onClick={colorHandler}>
        Blue
      </button>
    </>
  );
}
