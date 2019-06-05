import React from "react";
import useVisibility from "./visibility";

function App() {
  const { visibility } = useVisibility();
  return <h1>{visibility}</h1>;
}

export default App;
