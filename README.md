##### Githup-pages no esta implementado correctamente hasta el momento.
# `100tifico`
---
### Descripcion
+ 100tifico es una single-page-aplication que renderiza desde una api los personajes de la popular serie Rich and Morty, ademas de mostrarnos algo de informacion relevante.
+ La aplicacion cuenta con archivos de configuracion de webpack y algunas dependencias.
+ Aunque cuenta con dependencias la app esta enteramente construida con js 'vanilla', incluyendo el enrutamiento. 
### SCRIPTS 
1. start : start arranca el proyecto con un servidor local en desarrollo.
2. build : build crea el compilado de produccion.
### DevDependencies
###### ♦*Cambiar algunas versiones de los paquetes definitivamente causar conflictos*
+ webpack : webpack
+ webpack-cli : 
+ webpack-dev-server : servidor de desarrollo.
+ copy-webpack-plugin : mueve los archivos de estilos en el momento de hacer la compilacion de produccion a la carpeta dist.
+ html-webpack-plugin : mueve los arvhivos de html en el momento de hacer la compilacion de produccion a la carpeta dist.
+ @babel/core : No utilizada hasta el momento.
+ babel-loader : No utilizada hasta el momento.

##### Nota: para mandar los cambios a github pages nececitaremos corres el commando npm run deploy esto ejecutara  tambiel el camando predeploy que por ser 'pre' se ejecuta promero por defecto, estos dos compilan dist en el github, una vez ejecutado esto habra preparado la carpeta build o dist para enviarla a github con las comfiguraciones internas necesarias para que github entienda como tratar la informacion y donde ponerla.
