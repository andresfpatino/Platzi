# 🗂️ Copia de archivos con Webpack

## Apuntes
Si tienes la necesidad de mover un archivo o directorio a tu proyecto final podemos usar un plugin llamado “copy-webpack-plugin”
Para instalarlo debemos ejecutar el comando

    npm i copy-webpack-plugin -D

Para poder comenzar a usarlo debemos agregar estas configuraciones a webpack.config.js

    const CopyPlugin = require('copy-webpack-plugin');

    module.exports = {
        ...
    plugins: [
        new CopyPlugin({
        patterns: [
            {
            from: path.resolve(__dirname, "src", "assets/images"),
            to: "assets/images"
            }
        ]
        }),
    ]
    }

Es importante las propiedades from y to
- From ⇒ que recurso (archivo o directorio) deseamos copiar al directorio final
- To ⇒ en que ruta dentro de la carpeta final terminara los recursos