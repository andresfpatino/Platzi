- Iniciar proyecto: `npm init -y`
- Crear las carpetas:  `mkdir src public src/css public/css`
- Crear los archivos ***este comando no funciona en la consola de windows: `touch src/css/index.css public/index.html public/css/index.css`
- Instalar las dependencias:   `npm install -D tailwindcss`
- Inicializar un proyecto tailwind: `npx tailwindcss init`
- Reemplazar en el archivo tailwind.config.js por: 
```
module.exports = {
    content: ['./public/index.html', './src/**/*.{html,js}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
```
- Agregar al archivo `src/css/index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
- Agregar contenido al archivo `public/index.html`
- Ejecutar este comando: `npx tailwindcss -i ./src/css/index.css -o ./public/css/index.css --watch`