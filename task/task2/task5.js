const task5 = (arr5) => {
    arr5.map(element  => {
        if ( typeof element === 'string') {
            console.log(`${element[0].toUpperCase()}${element.slice(1)}`);
        }
        else { element.remove};
    });
};  
task5([4, 'hi', 'my', 4, 'friend']);