# 🎴 Loaders de imágenes

Puedes usar una forma de importar las imágenes haciendo un import de las mismas y generando una variable
No es necesario instalar ninguna dependencia, webpack ya lo tiene incluido debemos agregar la siguiente configuración:

    module.exports = {
        ...
    module: {
        rules: [
        {
            test: /\.png/,
            type: "asset/resource"
        }
        ]
    },
    }

Para empezar a usar esta configuración debemos importar la imagen de la siguiente forma:

import github from '../assets/images/github.png';
Para incluirlo en el HTML debes hacer lo siguiente

// Ejemplo en Vanilla JS
const imagen = `<img src=`${github}` />`;
