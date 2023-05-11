# cajero-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for d# cajero-app

Aplicativo web con funciones de un Cajero Automatico, creado con VueJs en su version 2

# Tecnologías usadas
Para la construcción del aplicativo web, se utilizaron las siguiente librerias:

- **VueJS v2.7.4**
- **Bootstrap-vue v2.23.1**
- **MomentJS v2.29.4**
- **Json-server**

# Instalación y Ejecución del proyecto
Para llevar a cabo la instalación del proyecto, solo es necesario ejecutar los siguientes comandos:


Existen más librerías dentro del proyecto, que pueden ser visualizadas en el archivo package.json, pero en general, las mencionadas previamente, son las más importantes.

```
git clone https://github.com/JesusRafaelNavaCruz/cajero-app.git
cd cajero-app
npm install
npm run serve
```

El aplicativo hace uso de una api local, creado con un archivo **datafake.json**, ubicado en la carpeta **api** en la raiz del proyecto. Para hacer uso de esta se deberá instalar **json-server** y ejecutar el servidor como se muestra a continuación:
```
npm install -g json-server
json-server --watch api/datafake.json

```

evelopment
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
