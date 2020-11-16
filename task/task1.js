const sayHello = (name) => {
if (name == "Mark") {
    return console.log(`Hi, ${name}!`);
} else return console.log(`Hello, ${name}!`);
}
sayHello("Oleg");
sayHello("Viktor");
sayHello("Mark");


const sayHi = function(name) {
    if (name == "Mark") {
        return document.write(`Hi, ${name}! <br/>`);
    } else return document.write(`Hello, ${name}! <br/>`); 
}

sayHi("Oleg");
sayHi("Viktor");
sayHi("Mark");

