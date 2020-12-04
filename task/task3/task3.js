'use strict';
const arr = [];
const body = document.querySelector('body');
const ulEl = document.createElement('ul');
body.prepend(ulEl);
let sum = 0;

const createList = () => {
    do {
        let num = Number(prompt('Number?', '2'));
        if (!Number(num)) { break;}
        else {
            sum += num;
            arr.push(sum);
            console.log(arr)
        }
    } while(true);   
    arr.forEach(item => {
        const liEl = document.createElement('li');
        liEl.textContent = item;
        ulEl.append(liEl);
    });
};
createList();
