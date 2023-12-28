# Aplicación Verifarma

## Visión General

Este repositorio contiene el código base para la aplicación "Verifarma", un sistema que requiere variables de entorno específicas para su correcto funcionamiento. A continuación, se detallan los pasos para configurar y ejecutar la aplicación utilizando Docker.

## Inicio

### Configuración Inicial

1. **Crear el archivo `.env`**

   - Crea un archivo llamado `.env`.
   - Agrega los siguientes datos con sus respectivos valores, por ejemplo:

   ```properties
   AUTH_CREDENTIALS_EMAIL=admin@admin.com
   AUTH_CREDENTIALS_PASSWORD=administrator
   OMDB_API_URL=https://www.omdbapi.com/
   OMDB_API_KEY=
   AUTH_ORIGIN=http://localhost:3000
   AUTH_SECRET=EQuiKFyoqTEXJPtSoCUe6UGscNVjW5nU
   ```

   OMDB_API_KEY= La key se obtiene de https://www.omdbapi.com/apikey.aspx
   AUTH_SECRET= key privada. referencia https://sidebase.io/
   AUTH_ORIGIN= Origen. referencia https://sidebase.io/

### Creacion imagen

1. Abre tu terminal o línea de comandos.
2. Ubícate en el directorio donde se encuentra tu archivo Dockerfile.
3. Ejecuta el siguiente comando para construir la imagen:

   ```bash
   docker build -t verifarma .
   ```

### ejecutar contenedor

Para ejecutar un contenedor Docker usando el comando `docker run`, sigue estos pasos:

1. Abre tu terminal o línea de comandos.
2. Ejecuta el siguiente comando para iniciar un contenedor:

   ```bash
   docker run --name verifarma -p 3000:3000 --env-file ./.env -d verifarma
   ```

### Para levantar el proyecto en modo de desarrollo, sigue estos pasos

1. Abre tu terminal o línea de comandos.
2. Asegúrate de estar en el directorio raíz del proyecto.
3. Ejecuta el siguiente comando para iniciar el servidor de desarrollo:

   ```bash
   npm install # Si es necesario instalar las dependencias del proyecto
   npm run dev   # Comando para iniciar el proyecto en modo de desarrollo
   ```
