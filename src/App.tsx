import { useState } from 'react';
import './App.css';
import { SortBy } from './types.d';

const App = () => {
  const [showColors, setShowColors] = useState(false);
  const [sorting, setSorting] = useState<SortBy>(SortBy.NAME);
  const [filterCountry, setFilterCountry] = useState<string | null>(null);

  const toggleColors = () => {
    setShowColors(!showColors);
  };

  const toggleSortByCountry = () => {
    const newSortingValue =
      sorting === SortBy.NONE ? SortBy.COUNTRY : SortBy.NONE;
    setSorting(newSortingValue);
  };

  return (
    <div className="content">
      <h1>Prueba técnica</h1>
      <header>
        <button onClick={toggleColors} type="button">
          Colorear filas
        </button>
        <button onClick={toggleSortByCountry} type="button">
          {sorting === SortBy.COUNTRY
            ? 'No ordenar por país'
            : 'Ordenar por país'}
        </button>
        <input
          placeholder="Filtra por país"
          onChange={(e) => {
            setFilterCountry(e.target.value);
          }}
        />
      </header>
    </div>
  );
};

export default App;
