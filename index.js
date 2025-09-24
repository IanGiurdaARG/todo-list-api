const express = require('express');
const mongoose = require('mongoose');
const tareaRoutes = require('./routes/tareas');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/todoDB')
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log('Error de conexión:', err));

app.use('/tareas', tareaRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
