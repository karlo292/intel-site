const elements = document.querySelectorAll('.hover');

elements.forEach(element => {
  element.addEventListener('mouseover', () => {
    element.style.cursor = 'pointer';
  });
  
  elements.addEventListener('mouseout', () => {
    element.style.cursor = 'auto';
  });
});
