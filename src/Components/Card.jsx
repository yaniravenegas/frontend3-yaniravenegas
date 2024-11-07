const Card = ({ title, author, inStock, onNewSearch }) => {
    return (
      <div className="card">
        <span className="material-symbols-outlined card-icon">menu_book</span>
        
        <h3 className="card-title">{title}</h3>
        <p className="card-author">{author}</p>
        {inStock && <p className="card-stock">El libro tiene existencias</p>}
        <button className="card-button" onClick={onNewSearch}>Nueva búsqueda</button>
      </div>
    );
  };
  
  export default Card;