export const ToggleVisibility=(dropdown)=>{
    const panel = dropdown.parentNode.querySelector('.dropdown-panel');
    const panels = document.querySelectorAll('.dropdown-panel--isVisible');

    for(let i=0 , current = panels[i]; i<panels.length; i++){
      current.classList.toggle('dropdown-panel--isHidden')
      current.classList.toggle('dropdown-panel--isVisible')
    }
    panel.classList.toggle('dropdown-panel--isHidden')
    panel.classList.toggle('dropdown-panel--isVisible')
}