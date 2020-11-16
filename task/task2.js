const writeNumbers = (x, y) => {
    if (x > y) {
        let num = (y - 1);
        while(num++ < x) {
            document.write(num);
            document.write("<br/>");
        }
    } else (x < y);
        let num = (x -1);
        while(num++ < y) {
            document.write(num);
            document.write("<br/>");
        }
}
writeNumbers(2, 10);
writeNumbers(10, 2);
// Так тут сильно на меня не ругаться как придумал так
//и реализовал ))))
