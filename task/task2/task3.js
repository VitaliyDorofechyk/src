const task3 = (arr3) => {
    arr3.forEach(element => {
        if (typeof element === 'string') {
            document.write(`${element} - string value </br>`);
        }
        else {
            document.write(`${element} - number value </br>`);
        }
    });
};
task3(['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9]);
// если по условия переписал цикл for


const arrTask3 = ['Anna', 12, 'Sam', 9, 'Kate', 10, 'Ron', 9];
arrTask3.sort();
arrTask3.reverse();
console.log(arrTask3);
//а может так надо было....