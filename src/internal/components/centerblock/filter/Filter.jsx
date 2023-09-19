import { useState } from 'react';
import { FilterAuthor } from './FilterAuthor';
import { FilterGenre } from './FilterGenre';
import { FilterYear } from './FilterYear';
import { CenterblockFilter, FilterButton } from './filterStyle';

export const Filter = () => {
  const [visibleFilter, setVisibleFilter] = useState(null);

  const toggleVisibleFilter = (filter) => {
    setVisibleFilter(visibleFilter === filter ? null : filter);
  };

  return (
    <CenterblockFilter>
      <div className="filter__title">Искать по:</div>
      <div>
        <FilterButton
          type="button"
          onClick={() => toggleVisibleFilter('Author')}
        >
          Исполнителю
        </FilterButton>
        {visibleFilter === 'Author' && <FilterAuthor />}
      </div>
      <div>
        <FilterButton type="button" onClick={() => toggleVisibleFilter('Year')}>
          году выпуска
        </FilterButton>
        {visibleFilter === 'Year' && <FilterYear />}
      </div>
      <div>
        <FilterButton
          type="button"
          onClick={() => toggleVisibleFilter('Genre')}
        >
          жанру
        </FilterButton>
        {visibleFilter === 'Genre' && <FilterGenre />}
      </div>
    </CenterblockFilter>
  );
};
