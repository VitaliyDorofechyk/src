let digital_root = (n) => {
    return Math.abs(n % 9);
};
document.write(digital_root(16));
document.write(digital_root(942));
document.write(digital_root(132189));
//=)))

const digital_root1 = (n) => {
    if (-9 <= n && n <= 9) {
        return n;
    }
    else { return Math.floor(n % 9);}
};
console.log(digital_root1(16));
console.log(digital_root1(942));
console.log(digital_root1(132189));
