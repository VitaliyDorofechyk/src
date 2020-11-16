const convertFloor = (floor) => {
    if ( floor >=0 && floor <13) {
        return (floor + 1);
    }
        else if (floor < 0 || floor > 13) {
            return (floor) ;
    }
        else {return ("Нет такого этажа");
    }
}

console.log(convertFloor(-2));
console.log(convertFloor(0));
console.log(convertFloor(2));
console.log(convertFloor(14));
console.log(convertFloor(12));
console.log(convertFloor(13));