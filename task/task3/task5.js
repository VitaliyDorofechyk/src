
const drawFigure = (name, color, top, left, ) => {
    const div = document.createElement('div');
    div.classList.add('message');
    div.textContent = name;
    div.style.backgroundColor = color;
    div.style.top = `${top}px`;
    div.style.left = `${left}px`;
    div.style.position = 'fixed';

  
    
  
    body.append(div);
  };
  