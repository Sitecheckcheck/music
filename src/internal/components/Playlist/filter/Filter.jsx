/* eslint-disable */
import { useState } from 'react';
import { FilterAuthor } from './FilterAuthor';
import { FilterGenre } from './FilterGenre';
import { FilterYear } from './FilterYear';
import { CenterblockFilter, FilterButton } from './filterStyle';

export const Filter = ({ playlist, setCurrentPlaylist, setPlaylist }) => {
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
        {visibleFilter === 'Author' && (
          <FilterAuthor
            playlist={playlist}
            setCurrentPlaylist={setCurrentPlaylist}
            setPlaylist={setPlaylist}
          />
        )}
      </div>
      <div>
        <FilterButton type="button" onClick={() => toggleVisibleFilter('Year')}>
          году выпуска
        </FilterButton>
        {visibleFilter === 'Year' && (
          <FilterYear
            playlist={playlist}
            setCurrentPlaylist={setCurrentPlaylist}
            setPlaylist={setPlaylist}
          />
        )}
      </div>
      <div>
        <FilterButton
          type="button"
          onClick={() => toggleVisibleFilter('Genre')}
        >
          жанру
        </FilterButton>
        {visibleFilter === 'Genre' && (
          <FilterGenre
            playlist={playlist}
            setCurrentPlaylist={setCurrentPlaylist}
            setPlaylist={setPlaylist}
          />
        )}
      </div>
    </CenterblockFilter>
  );
};
