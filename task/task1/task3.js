const writeNumber = (x, y) => {
    if (x > y) {
        let num = (x + 1);
        while(num-- > y) {
            document.write(num);
            document.write("<br/>");
        }
    } else if (x < y) {
        let num = (y + 1);
        while(num-- > x) {
            document.write(num);
            document.write("<br/>");
        }
    } 
}
writeNumber(2, 10);
writeNumber(10, 2);
