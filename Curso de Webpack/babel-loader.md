# 馃挍  Babel Loader para JavaScript
## Apuntes<
- Babel te permite hacer que tu c贸digo JavaScript sea compatible con todos los navegadores
- Debes agregar a tu proyecto las siguientes dependencias
  
NPM

    npm install -D babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime

- babel-loader nos permite usar babel con webpack
- *@babel/core* es babel en general
- *@babel/preset-env* trae y te permite usar las ultimas caracter铆sticas de JavaScript
- *@babel/plugin-transform-runtime* te permite trabajar con todo el tema de asincronismo como ser async y await

Debes crear el archivo de configuraci贸n de babel el cual tiene como nombre .babelrc

    {
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        "@babel/plugin-transform-runtime"
    ]
    }

- Para comenzar a utilizar webpack debemos agregar la siguiente configuraci贸n en webpack.config.js

    {
    ...,
    module: {
        rules: [
        {
            // Test declara que extensi贸n de archivos aplicara el loader
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

*RESUMEN:* Babel te ayuda a transpilar el c贸digo JavaScript, a un resultado el cual todos los navegadores lo puedan entender y ejecutar. Trae 鈥渆xtensiones鈥? o plugins las cuales nos permiten tener caracter铆sticas m谩s all谩 del JavaScript com煤n