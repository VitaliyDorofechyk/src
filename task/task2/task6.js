const arr6 = [];
const task5 = (message) => {
    arr6.map((element, index)  => {
        if ( typeof element === 'number') {
            console.log(arr6[index].push(element));
        }
        else { alert('Это не число')};
    });
}; 
// let num = () => { 
//     let message = () =>{
//     return prompt('Введите число', 2);
//     }
//     }    
//     let message = Number(message);
// };
//     task5(message);