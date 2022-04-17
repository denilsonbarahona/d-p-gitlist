let itemIndex;
let items = [];

const moveIndex = () => {
  if (itemIndex < 0) {
    itemIndex = items.length - 1;
  }
  if (itemIndex >= items.length) {
    itemIndex = 0;
  }
  moveFocus();
};

const HandleKeyPress = function (event) {
  switch (event.code) {
    case "ArrowUp":
      --itemIndex;
      moveIndex();
      return;
    case "ArrowDown":
      ++itemIndex;
      moveIndex();
      
  }
};

const moveFocus = () => items[itemIndex].focus();

const removePanelEvent = (panel) => {
  panel.removeEventListener("keyup", HandleKeyPress);
};

const setSelection = (panel) => {
  items = panel.querySelectorAll(".dropdown-item");
  items[0].focus();
  itemIndex = 0;
};

const addPanelEvent = (panel) => {
  setSelection(panel);
  panel.addEventListener("keyup", HandleKeyPress);
};

const translatePanel = (panel, windowWith) => {
  const { x } = panel.getBoundingClientRect();
  if (x < 0) {
    panel.style.insetInlineEnd = "unset";
  }
  if (window.innerWidth > windowWith) {
    panel.style.insetInlineEnd = "-70%";
  }
};

export const ToggleVisibility = (panel) => {
  const panels = document.querySelectorAll(".dropdown-panel--isVisible");
  const windowWith = window.innerWidth;

  for (let i = 0, current = panels[i]; i < panels.length; i++) {
    if (current != panel) {
      current.classList.toggle("dropdown-panel--isHidden");
      current.classList.toggle("dropdown-panel--isVisible");

      if (current.classList.contains("dropdown-panel--isHidden"))
        removePanelEvent(current);
    }
  }

  panel.classList.toggle("dropdown-panel--isHidden");
  panel.classList.toggle("dropdown-panel--isVisible");
  if (panel.classList.contains("dropdown-panel--isVisible")) {
    addPanelEvent(panel);
  }

  if (panel.classList.contains("dropdown-panel--isHidden")) {
    removePanelEvent(panel);
  }
  translatePanel(panel, windowWith);
};
