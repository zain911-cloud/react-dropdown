import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  function handleItemClick(item) {
    setSelectedItem(item);
    setIsOpen(false);
  }

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedItem ? selectedItem.label : "Select an option"}
        <span className="dropdown-arrow">&#9660;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item) => (
            <li
              key={item.value}
              className="dropdown-item"
              onClick={() => handleItemClick(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
