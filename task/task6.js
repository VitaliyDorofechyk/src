//const minus = (a, b) => {
//    return a - b;
//}
//const plus = (a, b) => {
//    return a + b;
//}
//const divide = (a, b) => {
//    return a / b;
//}
//const multiply = (a, b) => {
//    return a * b;
//}
//let a = prompt('Введите занчение a', 2);
//let c = prompt('Введите знак что будем делать с a"+,-,*,/"', '+')
//let b = prompt('Введите занчение b', 3);
//alert(`Ответ: ${doOperation}`);

let doOperation = (a, c, b) => {
    switch(c) {
        case '+':
            return (a + b);
            break;
        case '-':
            return (a - b);
            break;
        case '/':
            return (a / b);
            break;
        case '*':
            return multiply(a * b);
            break;
    }
}
let a = prompt('Введите занчение a', 2);
let c = prompt('Введите знак что будем делать с a"+,-,*,/"', '+')
let b = prompt('Введите занчение b', 3);
alert(`Ответ: ${doOperation}`);