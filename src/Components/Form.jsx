import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ title: '', author: '' });
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones para título y autor
    if (
      formData.title.length >= 3 &&
      !formData.title.startsWith(' ') &&
      formData.author.length >= 6
    ) {
      setError(false);
      onSubmit(formData); // Llama a onSubmit solo si la validación es exitosa
    } else {
      setError(true); // Muestra el error si la validación falla
    }
  };

  return (
    <div>
      <h2>Buscador de Libros</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label>Título del libro:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Nombre del autor:</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Buscar</button>
      </form>

      {error && <p style={{ color: 'red' }}>Por favor chequea que la información sea correcta</p>}
    </div>
  );
};

export default Form;