# `100tifico`
---
### `Descripcion`
+ 100tifico es una *single-page-aplication* que renderiza desde una API los personajes de la popular serie *Rick and Morty*, además de mostrarnos algo de información relevante.
+ La aplicación cuenta con archivos de configuración de webpack y algunas dependencias.

### `SCRIPTS` 
1. start : start arranca el proyecto con un servidor local en desarrollo.
2. build : build crea el compilado de producción.
3. predeploy: ejecuta "npm run build". Por ser un 'pre' se ejecutará por defecto cuando sea ejecutado 'deploy'
4. deploy: ejecuta "gh-pages -d build" para mandar el compilado a producción.
---

### `Dependencias`
###### ♦*Cambiar algunas versiones de los paquetes definitivamente causar conflictos*
+ webpack
+ webpack-cli
+ webpack-dev-server : servidor de desarrollo.
+ copy-webpack-plugin : mueve los archivos de estilos en el momento de hacer la compilación de producción a la carpeta dist.
+ html-webpack-plugin : mueve los archivos de html en el momento de hacer la compilación de producción a la carpeta dist.
+ gh-pages: para integrar la app a gitHub pages.
+ @babel/core : No utilizada hasta el momento.
+ babel-loader : No utilizada hasta el momento.
---
### `Tecnologías`
- HTML
- CSS
- JavaScript
- Webpack
- npm
---

### `URL`
- [100tifico](https://thhomasgt99.github.io/100tifico/)
---

##### Nota: para mandar los cambios a github pages necesitaremos correr el comando "npm run deploy" esto ejecutará también el comando "predeploy" que por ser 'pre' se ejecuta primero por defecto, una vez ejecutado esto habrá preparado la carpeta (build o dist) para enviarla a github (git push origin main) con las configuraciones internas necesarias para que github entienda como tratar la información y donde ponerla.
