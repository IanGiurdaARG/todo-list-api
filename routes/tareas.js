const express = require('express');
const router = express.Router();
const Tarea = require('../models/Tarea');

// Obtener todas las tareas
router.get('/', async (req, res) => {
  const tareas = await Tarea.find();
  res.json(tareas);
});

// Crear tarea
router.post('/', async (req, res) => {
  const nuevaTarea = new Tarea(req.body);
  await nuevaTarea.save();
  res.json(nuevaTarea);
});

// Actualizar tarea
router.put('/:id', async (req, res) => {
  const tarea = await Tarea.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(tarea);
});

// Borrar tarea
router.delete('/:id', async (req, res) => {
  await Tarea.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Tarea eliminada' });
});

module.exports = router;
