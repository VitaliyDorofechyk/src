
const task5 = (arr) => {
    return arr.reduce((acc, element) => {
        if ( typeof element === 'string') {
            let firstLetter = element[0];
            const newElement = element.replace(firstLetter, firstLetter.toUpperCase());
            acc.push(newElement);
        }
        else { 
            element.remove
        }
        return acc;
    },[]);
};  
let arr5 = ['hi', 5, 'my', 3, 'frend'];
console.log(task5(arr5));
console.log(arr5);
