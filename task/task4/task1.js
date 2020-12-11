'use strict'
let balanceRasxod = 0;
let balanceDoxod = 0;

const radioDoxod = document.querySelector('.doxod');
const radioRasxod = document.querySelector('.rasxod');
const poleVvoda = document.querySelector('.poleVvoda');
const doxodDiv = document.querySelector('.doxodDiv');
const rasxodDiv = document.querySelector('.rasxodDiv');
const  balans = document.querySelector('.balans');
const result = document.querySelector('.result');

radioDoxod.addEventListener('click', handlerDoxod);
function handlerDoxod () {
    balanceDoxod = balanceDoxod + Number(poleVvoda.value);
    doxodDiv.innerHTML = balanceDoxod;
    doxodDiv.style.height = (balanceDoxod / 2) + 'px';
    balans.innerHTML = balanceDoxod - balanceRasxod;
    result.innerHTML = balanceDoxod - balanceRasxod;
    balans.style.height = (balans.innerHTML / 2) + 'px';
    poleVvoda.value = '';
    console.log(balanceDoxod)
};

radioRasxod.addEventListener('click', handlerRasxod);
function handlerRasxod () {
    balanceRasxod = balanceRasxod + Number(poleVvoda.value);
    rasxodDiv.innerHTML = balanceRasxod;
    rasxodDiv.style.height = (balanceRasxod / 2) + 'px';
    balans.innerHTML = balanceDoxod - balanceRasxod;
    result.innerHTML = balanceDoxod - balanceRasxod;
    balans.style.height = (balans.innerHTML / 2) + 'px';
    poleVvoda.value = '';
    console.log(balanceRasxod)
};
