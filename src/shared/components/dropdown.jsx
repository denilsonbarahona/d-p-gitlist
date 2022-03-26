import React from "react";
import "@styles/dropdown.scss";

const Dropdown = () => {
  return (
    <div role="listbox" aria-label="select an option" className="dropdown">
      <div tabIndex="0" className="dropdown-title">
        <span>dropdown</span>
        <i aria-hidden="true" className="icon-circle-down"></i>
      </div>
      <div className="dropdown-panel dropdown-panel--isVisible">
        <div className="dropdown-header">
          <p>Select type</p>
          <i
            tabIndex="0"
            role="button"
            aria-label="click to close to panel"
            className="icon-cross"
          />
        </div>
        <div>
          <div
            id="all"
            tabIndex="0"
            role="option"
            aria-selected="true"
            className="dropdown-item"
          >
            <i className="icon-checkmark" />
            All
          </div>
          <div
            id="Sources"
            tabIndex="0"
            role="option"
            aria-selected="false"
            className="dropdown-item"
          >
            Sources
          </div>
          <div
            id="Forks"
            tabIndex="0"
            role="option"
            aria-selected="false"
            className="dropdown-item"
          >
            Forks
          </div>
          <div
            id="Archived"
            tabIndex="0"
            role="option"
            aria-selected="false"
            className="dropdown-item"
          >
            Archived
          </div>
          <div
            id="Mirrors"
            tabIndex="0"
            role="option"
            aria-selected="false"
            className="dropdown-item"
          >
            Mirrors
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
