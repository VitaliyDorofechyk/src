
const btnShowForm = document.querySelector('.btnShowForm');
const formList = document.forms.formList;
const btnCancel = document.querySelector('.btnCancel');
const btnAddElem = document.querySelector('.btnAddElem');
const inputAge = document.querySelector('.inputAge');
const inputName = document.querySelector('.inputName');


btnShowForm.addEventListener('click', showCover);
btnShowForm.addEventListener('click', handlerFormOn);
btnCancel.addEventListener('click', handlerFormOff);
btnCancel.addEventListener('click', hideCover);
btnAddElem.addEventListener('click', handlerAddElem);
btnAddElem.addEventListener('click', hideCover);

// Показать полупрозрачный DIV, чтобы затенить страницу
function showCover() {
    let coverDiv = document.createElement('div');
    coverDiv.id = 'cover-div';
//Убрать прокрутку
    document.body.style.overflowY = 'hidden';
  
    document.body.append(coverDiv);
};
//Убрать DIV
function hideCover() {
    let div = document.querySelector('#cover-div').remove();
    document.body.style.overflowY = '';
};

function handlerFormOn() {
    formList.style.display = 'inline-block';
};
function handlerFormOff() {
    formList.style.display = '';
    inputName.value = '';
    inputAge.value = '';
};
function handlerAddElem(event) {
    event.preventDefault();
    if (inputAge.value < 18) {
        alert('Лица моложе 18 в список не добавляются!');
        inputName.value = '';
        inputAge.value = '';
        formList.style.display = '';
    }
    else {
    let ulEl = document.createElement('ul');
    let liEl = document.createElement('li');
    btnShowForm.before(ulEl);
    ulEl.append(liEl);
    liEl.innerHTML = `Name ${inputName.value}, age ${inputAge.value}`;
    formList.style.display = '';
    inputName.value = '';
    inputAge.value = '';
    }
};


