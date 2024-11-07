import { useState } from 'react';
import Form from './Components/Form';
import Card from './Components/Card';

function App() {
  const [bookData, setBookData] = useState(null);

  const handleFormSubmit = (data) => {
    setBookData(data); // Establece los datos después de una búsqueda exitosa
  };

  const handleNewSearch = () => {
    setBookData(null); // Reinicia el estado para permitir una nueva búsqueda
  };

  return (
    <div className="app-container">
      {!bookData ? (
        <Form onSubmit={handleFormSubmit} />
      ) : (
        <Card 
          title={bookData.title} 
          author={bookData.author} 
          inStock={true} 
          onNewSearch={handleNewSearch} // Pasa la función para reiniciar
        />
      )}
    </div>
  );
}

export default App;
