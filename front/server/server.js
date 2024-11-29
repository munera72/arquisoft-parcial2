const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (replace with a real database in production)
/*let students = {
  '123456789': {
    nombre: 'Juan Pérez',
    materias: {
      'Matemáticas': [
        { descripcion: 'Primer Parcial', nota: 4.5 },
        { descripcion: 'Segundo Parcial', nota: 4.2 },
        { descripcion: 'Trabajo Final', nota: 4.8 }
      ],
      'Física': [
        { descripcion: 'Quiz 1', nota: 4.0 },
        { descripcion: 'Laboratorio', nota: 4.5 },
        { descripcion: 'Examen Final', nota: 3.8 }
      ],
      'Química': [
        { descripcion: 'Trabajo en Grupo', nota: 4.2 },
        { descripcion: 'Exposición', nota: 3.8 },
        { descripcion: 'Proyecto Final', nota: 4.0 }
      ]
    }
  }
};*/

// GET endpoint - Consultar notas por cédula
app.get('/api/students/:cedula', (req, res) => {
  const { cedula } = req.params;
  const student = students[cedula];
  
  if (!student) {
    return res.status(404).json({ error: 'Estudiante no encontrado' });
  }
  
  res.json(student);
});

// POST endpoint - Ingresar nueva nota
app.post('/api/grades', (req, res) => {
  const { cedula, materia, descripcion, nota } = req.body;
  
  if (!cedula || !materia || !descripcion || !nota) {
    return res.status(400).json({ error: 'Todos los campos son requeridos' });
  }

  // Si el estudiante no existe, crear uno nuevo
  if (!students[cedula]) {
    students[cedula] = {
      nombre: 'Estudiante ' + cedula,
      materias: {}
    };
  }

  // Si la materia no existe, crear un array vacío para ella
  if (!students[cedula].materias[materia]) {
    students[cedula].materias[materia] = [];
  }

  // Buscar si la descripción ya existe para esa materia
  const descripcionIndex = students[cedula].materias[materia].findIndex(
    item => item.descripcion.toLowerCase() === descripcion.toLowerCase()
  );
  
  if (descripcionIndex >= 0) {
    // Actualizar nota existente
    students[cedula].materias[materia][descripcionIndex].nota = parseFloat(nota);
  } else {
    // Agregar nueva descripción y nota
    students[cedula].materias[materia].push({
      descripcion,
      nota: parseFloat(nota)
    });
  }

  res.json({ message: 'Nota guardada exitosamente' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
