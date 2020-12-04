const writeEl = prompt('Напишите элемент который вы хотите добавить', 'p');
const writeText = prompt('Напишите что разместить в элементе', 'Текст');
const body = document.querySelector('body');

const elem = document.createElement('writeEl');
body.append(elem);
elem.textContent = writeText;
