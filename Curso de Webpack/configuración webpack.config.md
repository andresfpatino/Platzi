# ⚙️ Configuración de webpack.config.js

## Apuntes</h4>
- El archivo de configuración nos va ayudar a poder establecer la configuración y elementos que vamos a utilizar
- Para poder crear el archivo de configuración en la raíz del proyecto creamos un archivo llamado webpack.config.js
- En el mismo debemos decir
    - El punto de entrada
    - Hacia a donde a enviar la configuración de nuestro proyecto
    - Las extensiones que vamos usar
  

    const path = require('path');

    module.exports = {
    // Entry nos permite decir el punto de entrada de nuestra aplicación
    entry: "./src/index.js",
    // Output nos permite decir hacia dónde va enviar lo que va a preparar webpacks
    output: {
        // path es donde estará la carpeta donde se guardará los archivos
        // Con path.resolve podemos decir dónde va estar la carpeta y la ubicación del mismo
        path: path.resolve(__dirname, "dist"),
        // filename le pone el nombre al archivo final
        filename: "main.js"
    },
    resolve: {
        // Aqui ponemos las extensiones que tendremos en nuestro proyecto para webpack los lea
        extensions: [".js"]
    },
    }


El flag —config indica donde estará nuestro archivo de configuración
npx webpack --mode production --config webpack.config.js
Para poder hacerlo más amigable el comando puedes crear un script en package.json

  "scripts": {
      ...
      "build": "webpack --mode production --config webpack.config.js"
    },
  
*RESUMEN:* Puedes crear un archivo webpack.config.js en el cual estarán las configuraciones con las cuales webpack trabajara, entre ellas están los puntos de entrada y salida, extensiones de archivos, entre otras características que se verán próximamente en él curso.