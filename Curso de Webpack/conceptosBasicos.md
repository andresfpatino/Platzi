# 📖 Conceptos básicos

## Ideas/conceptos claves
- Webpack es un paquete de módulos estáticos para aplicaciones de JS modernas
- Loader Te permite hacer un bundle de cualquier recurso estático más allá de JavaScript
- Plugins Extienden recursos para añadir configuraciones y particularidades de recursos externos

## Apuntes
- Webpack construye un gráfico de dependencias que mapea cada módulo para con verlo en uno o más módulos
- Desde webpack 4 ya no dependemos de tener un archivo de configuración, pero si debemos tener un punto de entrada
- Tambien tendremos que tener un punto de salida
- En este punto se creará nuestro proyecto una vez esté preparado
- Normalmente es la carpeta dist ⇒ Distribution
- Tambien contamos con diferentes modos
    - Modo de desarrollo
    - Modo de producción
    - Modos de performance

Donde tu añades
- Configuraciones de minificación
- Donde se va enviar
- Carpeta de destino
- Modos de desarrollo local

Donde puedes
- Crear puertos específicos para tu proyecto
- Ver cambios en tiempo real
- Dispone de loader y plugins permitiéndonos preparar particularidades de nuestro proyecto