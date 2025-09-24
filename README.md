# To-Do List API

API REST básica para manejo de tareas, implementada con **NodeJS**, **Express** y **MongoDB** usando **Mongoose**.


## Tecnologías

- NodeJS
- Express
- MongoDB
- Mongoose


## Funcionalidades

- CRUD de tareas (crear, listar, actualizar, eliminar)
- Validación de datos mediante Mongoose schema
- Persistencia en MongoDB
- Estructura modular: rutas, modelos y servidor principal separados

**Modelo de una tarea (Mongoose)**

```js
const tarea = {
  titulo: "Ejemplo",      // obligatorio
  completada: false       // por defecto false
};
```

## Cómo ejecutar el proyecto

1. **Instalar MongoDB** (si no está instalado):
    ```bash
    sudo apt install mongodb
    ```

2. **Arrancar MongoDB**
    ```bash
    sudo systemctl start mongod
    sudo systemctl status mongod  # para verificar que está activo
    ```

3. **Instalar dependencias del proyecto**
    ```bash
    npm install
    ```

4. **Arrancar el servidor nodeJS**
    ```bash
    node index.js
    ```

La API estará disponible en **http://localhost:3000**

## Endpoints principales

| Método | Ruta        | Descripción                 |
|--------|------------|------------------------------|
| GET    | /tareas    | Listar todas las tareas      |
| POST   | /tareas    | Crear nueva tarea            |
| PUT    | /tareas/:id| Actualizar tarea por ID      |
| DELETE | /tareas/:id| Borrar tarea por ID          |
