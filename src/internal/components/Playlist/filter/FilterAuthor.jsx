/* eslint-disable */
// import tracks from '../../../../Tracks';
import { Filters } from './filterStyle';
import { useAuthorContext } from '../../../../hooks/authorState';
import { useEffect } from 'react';

export const FilterAuthor = ({ playlist, setCurrentPlaylist, setPlaylist }) => {
  const arr = playlist.map((item) => item.author);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index).sort();

  const { authorState, setAuthorState } = useAuthorContext();

  const handleFilter = (item) => {
    
    if (item === 'All') {
      setAuthorState([]);
      setCurrentPlaylist(playlist);
      setPlaylist(playlist);
    } else {
      authorState.includes(item)
        ? setAuthorState(authorState.filter((x) => x !== item))
        : setAuthorState([...authorState, item]);
    }
  };

  useEffect(() => {
    setCurrentPlaylist(
      authorState.length !== 0 ? playlist.filter((el) => authorState.includes(el.author)) : playlist
    ) 
  }, [authorState]) 

  const filterAuthorItems = arr2.map((item) => (
    <li
      key={item}
      className={
        authorState.includes(item) ? 'filters-item-choose' : 'filters-item'
      }
      onClick={() => handleFilter(item)}
    >
      {item}
    </li>
  ));

  return (
    <Filters>
      <ul className="filtersList">
        <li className="filters-item" onClick={() => handleFilter('All')}>
          All
        </li>

        {filterAuthorItems}
      </ul>
    </Filters>
  );
};
