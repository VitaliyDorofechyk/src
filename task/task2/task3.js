const arrTask_3 = [];
const task3 = (arr3) => {
    arr3.forEach(element => {
        if (typeof element === 'string') {
            arrTask_3.push(`${element} - string value`);
        }
        else {
            arrTask_3.push(`${element} - number value`);
        }
    });
};
task3(['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9]);
// если я правильно понял задание
// должно быть так

const arrTask3 = arrTask_3;
arrTask3.sort();
arrTask3.reverse();
console.log(arrTask3);
