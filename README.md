# Nombre del Proyecto - Backend

Descripción breve del proyecto backend.

## Instalación

Para instalar todas las dependencias necesarias, ejecuta el siguiente comando:

```bash
npm install
```

O, alternativamente:

```bash
npm i
```

### Dependencias

Estas son algunas de las dependencias que se instalarán:

- cors
- dotenv
- express
- morgan
- mysql2
- nodemon
- sequelize
- socket.io

## Uso

Para iniciar el servidor, utiliza el siguiente comando:

```bash
npm start
```

Luego, abre tu navegador y ve a `http://localhost:8080`.

## Configuración

Asegúrate de que tu aplicación esté configurada para usar el puerto correcto. En este caso, el servidor está configurado para ejecutarse en `http://localhost:8080`.
Script

## Base de Datos

### Script

```sql
USE bmgjxray9a9sqlmo6mrs;

CREATE TABLE USUARIO (
    nombreUsuario VARCHAR(100) NOT NULL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    rol VARCHAR(50) NOT NULL
);

CREATE TABLE MENSAJE (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    contenido VARCHAR(100) NOT NULL,
    fecha VARCHAR(100) NOT NULL,
    usuario VARCHAR(50) NOT NULL,
    FOREIGN KEY (usuario) REFERENCES USUARIO(nombreUsuario)
);
## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-feature`).
3. Realiza tus cambios y haz commit (`git commit -am 'Agrega nueva feature'`).
4. Sube tus cambios (`git push origin feature/nueva-feature`).
5. Abre un Pull Request.
