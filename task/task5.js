const convertType12 = function(value, toType) {
    switch(toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
        default:
            return('Вы ввели неверное значение');
    }
}
console.log(convertType12('my string', 'string'));


const convertType3 = (value, toType) => {
    switch(toType) {
        case 'boolean':
            return Boolean(value);
            break;
        case 'string':
            return String(value);
            break;
        case 'number':
            return Number(value);
            break;
        default:
            return('Вы ввели неверное значение');
    }
}
console.log(convertType3('my string', 'boolean'));