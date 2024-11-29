import React, { useState } from 'react';
import './StudentSearch.css';

const StudentSearch = () => {
  const [cedula, setCedula] = useState('');
  const [studentData, setStudentData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/api/students/${cedula}`);
      if (!response.ok) {
        throw new Error('Estudiante no encontrado');
      }
      const data = await response.json();
      setStudentData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setStudentData(null);
    }
  };

  return (
    <div className="student-search">
      <h2>Consultar Notas de Estudiante</h2>
      <form onSubmit={handleSearch}>
        <div className="form-group">
          <label htmlFor="cedula">Cédula del Estudiante:</label>
          <input
            type="text"
            id="cedula"
            value={cedula}
            onChange={(e) => setCedula(e.target.value)}
            required
          />
        </div>
        <button type="submit">Buscar</button>
      </form>

      {error && <div className="error">{error}</div>}
      
      {studentData && (
        <div className="student-info">
          <h3>Información del Estudiante</h3>
          <p><strong>Nombre:</strong> {studentData.nombre}</p>
          <div className="subjects-container">
            {Object.entries(studentData.materias).map(([materia, notas]) => (
              <div key={materia} className="subject-card">
                <h4>{materia}</h4>
                <table className="grades-table">
                  <thead>
                    <tr>
                      <th>Descripción</th>
                      <th>Nota</th>
                    </tr>
                  </thead>
                  <tbody>
                    {notas.map((nota, index) => (
                      <tr key={index}>
                        <td>{nota.descripcion}</td>
                        <td>{nota.nota.toFixed(1)}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td><strong>Promedio</strong></td>
                      <td>
                        <strong>
                          {(notas.reduce((sum, nota) => sum + nota.nota, 0) / notas.length).toFixed(2)}
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentSearch;
