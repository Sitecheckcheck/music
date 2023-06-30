import { useState } from 'react';
import '../App.css';
import FilterGenre from './FilterGenre';
import FilterAuthor from './FilterAuthor';
import FilterYear from './FilterYear';

function Filter() {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  return (
    <div className="centerblock__filter filter">
      <div className="filter__title">Искать по:</div>
      <div>
        <button
          type="button"
          className="filter__button button-author _btn-text"
          onClick={() => toggleVisibleFilter('Author')}
        >
          Исполнителю
        </button>
        {visibleFilter === 'Author' && <FilterAuthor />}
      </div>
      <div>
        <button
          type="button"
          className="filter__button button-year _btn-text"
          onClick={() => toggleVisibleFilter('Year')}
        >
          году выпуска
        </button>
        {visibleFilter === 'Year' && <FilterYear />}
      </div>
      <div>
        <button
          type="button"
          className="filter__button button-genre _btn-text"
          onClick={() => toggleVisibleFilter('Genre')}
        >
          жанру
        </button>
        {visibleFilter === 'Genre' && <FilterGenre />}
      </div>
    </div>
  );
}

export default Filter;
