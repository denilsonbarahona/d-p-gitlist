import React, { useState } from "react";
import "@styles/dropdown.scss";
import { ToggleVisibility } from "../utils/dropdown-utils";

const Dropdown = ({ items, label, onSelected }) => {
  const [state, setState] = useState(items[0]);

  const OpenPanel = (event) => {
    ToggleVisibility(
      event.currentTarget.parentNode.querySelector(".dropdown-panel")
    );
  };

  const ClosePanel = (event) => {
    ToggleVisibility(event.target.closest(".dropdown-panel"));
  };

  const SelectItem = (event) => {
    setState(event.target.innerText);
    onSelected(event);
  };

  return (
    <div role="listbox" aria-label="select an option" className="dropdown">
      <div
        tabIndex="0"
        onKeyUp={(e) => e.code === "Enter" && OpenPanel(e)}
        onClick={OpenPanel}
        className="dropdown-title"
      >
        <span>{label}</span>
        <i aria-hidden="true" className="icon-circle-down"></i>
      </div>
      <div className="dropdown-panel dropdown-panel--isHidden">
        <div className="dropdown-header">
          <p>Select {label}</p>
          <i
            tabIndex="0"
            role="button"
            aria-label="click to close to panel"
            className="icon-cross"
            onKeyUp={(e) => e.code === "Enter" && ClosePanel()}
            onClick={ClosePanel}
          />
        </div>
        <div>
          {items.map((item) => (
            <div
              key={item}
              id={item}
              tabIndex="0"
              role="option"
              onClick={SelectItem}
              onKeyUp={(e) => e.code === "Enter" && SelectItem(e)}
              className={`dropdown-item ${
                item === state
                  ? "dropdown-item--Selected"
                  : "dropdown-item--UnSelected"
              }`}
            >
              <i className="icon-checkmark" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
