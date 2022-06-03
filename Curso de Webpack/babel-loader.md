# 💛  Babel Loader para JavaScript
## Apuntes<
- Babel te permite hacer que tu código JavaScript sea compatible con todos los navegadores
- Debes agregar a tu proyecto las siguientes dependencias
  
NPM

    npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime

- babel-loader nos permite usar babel con webpack
- *@babel/core* es babel en general
- *@babel/preset-env* trae y te permite usar las ultimas características de JavaScript
- *@babel/plugin-transform-runtime* te permite trabajar con todo el tema de asincronismo como ser async y await

Debes crear el archivo de configuración de babel el cual tiene como nombre .babelrc

    {
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
    }

- Para comenzar a utilizar webpack debemos agregar la siguiente configuración en webpack.config.js

    {
    ...,
    module: {
        rules: [
        {
            // Test declara que extensión de archivos aplicara el loader
            test: /\.js$/,
            // Use es un arreglo u objeto donde dices que loader aplicaras
            use: {
            loader: "babel-loader"
            },
            // Exclude permite omitir archivos o carpetas especificas
            exclude: /node_modules/
        }
        ]
    }
    }

*RESUMEN:* Babel te ayuda a transpilar el código JavaScript, a un resultado el cual todos los navegadores lo puedan entender y ejecutar. Trae “extensiones” o plugins las cuales nos permiten tener características más allá del JavaScript común