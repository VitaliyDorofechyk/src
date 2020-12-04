const parentEl = prompt('Напишите название родительского элемента', 'p');
const childEl = prompt('Напишите название дочернего элемента', 'p');
const writeText = prompt('Напишите текст в дочерний элемент', 'Текст');
const body = document.querySelector('body');
const parentElem = document.createElement(`${parentEl}`);
const childElem = document.createElement(`${childEl}`);

const blockArr = ['address', 'artical', 'aside', 'blockquote', 'dd', 'div', 'dl', 'dt', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'li', 'nav', 'ol', 'p', 'pre', 'ruby', 'section', 'table', 'tr', 'ul'];
const stringArr = ['a', 'abbr', 'audio', 'b', 'bdo', 'button', 'canvas', 'cite', 'code', 'del', 'dfn', 'em', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'mark', 'meter', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'small', 'select', 'span', 'strong', 'sub', 'sup', 'td', 'textarea', 'th', 'video', 'var'];

function nestingCheck () {
    if (blockArr.includes(`${parentEl}`) && blockArr.includes(`${childEl}`)) {
        return body.append(parentElem), parentElem.prepend(childElem);
    }
    if (stringArr.includes(`${parentEl}`) && stringArr.includes(`${childEl}`)) {
        return body.append(parentElem), parentElem.prepend(childElem);
    }
    if (blockArr.includes(`${parentEl}`) && stringArr.includes(`${childEl}`)) {
        return body.append(parentElem), parentElem.prepend(childElem);
    }
    else {
        alert("Eror! блочный элемент нельзя вкладывать в строчный!");
    }
};
nestingCheck();
childElem.textContent = writeText;
