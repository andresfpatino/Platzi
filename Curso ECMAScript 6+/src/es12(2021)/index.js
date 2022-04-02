// 1. ReplaceAll
const string = "JavaScript es maravilloso, con JavaScript puedo crear el futuro de la web.";
const replacedString = string.replaceAll("JavaScript", "WordPress");
console.log(replacedString);

// 2. Private methods
class Message {
    #show(val){ // Con el # convertimos al método en privado
        console.log(val);
    };
};

const message = new Message();
message.show('Hola!');

// 3. Promise Any
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));
