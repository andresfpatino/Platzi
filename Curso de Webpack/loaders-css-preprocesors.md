# 📘 Loaders para CSS y preprocesadores de CSS

## Ideas/conceptos claves
Un preprocesador CSS es un programa que te permite generar CSS a partir de la syntax única del preprocesador. Existen varios preprocesadores CSS de los cuales escoger, sin embargo, la mayoría de preprocesadores CSS añadirán algunas características que no existen en CSS puro, como variable, mixins, selectores anidados, entre otros. Estas características hacen la estructura de CSS más legible y fácil de mantener.

post procesadores son herramientas que procesan el CSS y lo transforman en una nueva hoja de CSS que le permiten optimizar y automatizar los estilos para los navegadores actuales.

## Apuntes
- Para dar soporte a CSS en webpack debes instalar los siguientes paquetes con npm

    npm i mini-css-extract-plugin css-loader -D

- *css-loader* ⇒ Loader para reconocer CSS
- *mini-css-extract-plugin* ⇒ Extrae el CSS en archivos
  
Para comenzar debemos agregar las configuraciones de webpack:

    const MiniCssExtractPlugin = require('mini-css-extract-plugin');

    module.exports = {
        ...,
        module: {
        rules: [
        {
            test: /\.(css|styl)$/i,
            use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            ]
        }
        ]
    },
    plugins: [
            ...
        new MiniCssExtractPlugin(),
    ]
    }

Si deseamos posteriormente podemos agregar herramientas poderosas de CSS como son:
- pre procesadores
    - Sass
    - Less
    - Stylus
- post procesadores
    - Post CSS
  
*RESUMEN:* Puedes dar soporte a CSS en webpack mediante loaders y plugins, además que puedes dar superpoderes al mismo con las nuevas herramientas conocidas como pre procesadores y post procesadores