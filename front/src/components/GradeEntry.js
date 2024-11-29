import React, { useState } from 'react';
import './GradeEntry.css';

const GradeEntry = () => {
  const [formData, setFormData] = useState({
    cedula: '',
    materia: '',
    descripcion: '',
    nota: ''
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/grades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error al guardar la nota');
      }

      const data = await response.json();
      setMessage('Nota guardada exitosamente');
      setFormData({
        cedula: '',
        materia: '',
        descripcion: '',
        nota: ''
      });
      setError('');
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grade-entry">
      <h2>Ingresar Nueva Nota</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cedula">Cédula del Estudiante:</label>
          <input
            type="text"
            id="cedula"
            name="cedula"
            value={formData.cedula}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="materia">Materia:</label>
          <input
            type="text"
            id="materia"
            name="materia"
            value={formData.materia}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción:</label>
          <input
            type="text"
            id="descripcion"
            name="descripcion"
            value={formData.descripcion}
            onChange={handleChange}
            placeholder="Ej: Primer Parcial, Quiz 1, Trabajo Final"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nota">Nota:</label>
          <input
            type="number"
            id="nota"
            name="nota"
            value={formData.nota}
            onChange={handleChange}
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>

        <button type="submit">Guardar Nota</button>
      </form>

      {message && <div className="success">{message}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default GradeEntry;
