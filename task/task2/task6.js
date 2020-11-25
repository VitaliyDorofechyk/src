
const task6 = () => {
    let arr6 = [];
    let i = 0;
    do { let num = parseFloat(prompt('я посчитаю любую сумму чисел которую ты введешь, чтоб узнать ответ введи 15', 2));
    if ( num == 15) {
        console.log(arr6);
        let result = arr6.reduce((sum, current) => sum + Number(current),0);
        console.log(`Сумма всех введеных чисел равна ${result}`);
        break;
    }
    else if ( typeof num == 'number') {
        arr6.push(`${num}`);
    }
    else {
      alert('Это не число');
    }
    i++;
    } while (true);
};
task6();