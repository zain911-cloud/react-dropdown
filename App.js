import React from "react";
import Dropdown from "./Dropdown";

function App() {
  const items = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ];

  return (
    <div className="App">
      <Dropdown items={items} />
    </div>
  );
}

export default App;
