import React from "react";
import "@styles/dropdown.scss";
import {ToggleVisibility}  from '../utils/dropdown-utils'

const Dropdown = ({ items }) => {

  const OpenPanel =(event)=> {
    ToggleVisibility(event.currentTarget)
  }

  const ClosePanel = (event) => {
    console.log(event.target.parentNode.parentNode)
  }

  return (
    <div role="listbox" aria-label="select an option" className="dropdown">
      <div tabIndex="0" onClick={OpenPanel} className="dropdown-title">
        <span>dropdown</span>
        <i aria-hidden="true" className="icon-circle-down"></i>
      </div>
      <div className="dropdown-panel dropdown-panel--isHidden">
        <div className="dropdown-header">
          <p>Select type</p>
          <i
            tabIndex="0"
            role="button"
            aria-label="click to close to panel"
            className="icon-cross"
            onClick={ClosePanel}
          />
        </div>
        <div>
          {items.map((item) => (
            <div
              key={item}
              id="all"
              tabIndex="0"
              role="option"
              /*   aria-selected="true" */
              className="dropdown-item"
            >
              {/*  <i className="icon-checkmark" /> */}
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
