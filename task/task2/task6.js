const task6 = () => { 

    const arr6 = [];

    do { 
        let num = parseFloat(prompt('я посчитаю любую сумму чисел которую ты введешь, чтоб узнать ответ введи 15', 2));
        if ( num == 15) {
            console.log(arr6);
            break
        }
        else if ( !isNaN(num) && typeof num == 'number') {
            arr6.push(num);
        }
        else {
            alert('Это не число');
        }
    } while (true);

    const result = arr6.reduce((acc, current) => acc + Number(current),0);
    const sum = (`Сумма всех введеных чисел равна ${result}`);
    console.log(sum);
};
task6();
    