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
