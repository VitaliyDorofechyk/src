const arr = ['Джаз', 'Блюз'];//создаем массив
console.log(arr);
arr.push('Рок-н-Ролл'); //добавляем в массив элемент
console.log(arr);
arr.splice(-2, 1, 'Классика'); // изменяем предпоследний элемент на ...
console.log(arr);
let removed = arr.splice(0, 1);// в переменную записываем значение удаляемого элемента массива
alert(removed);
console.log(arr);
arr.splice(0, 0, 'Рэп', 'Регги');// на первое место добавляем нове элементы
console.log(arr);