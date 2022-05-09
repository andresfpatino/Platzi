const messages = [
    "Andrés",
    "Ana",
    "Tatiana",
    "Diego",
    "Laura",
    "Juan",
    "Pedro",
    "María",
    "José",
    "Pablo",
    "Sofía",
    "Daniel",
    "Rafael",
    "Julia",
    "Miguel",
    "Marta",
]

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };
