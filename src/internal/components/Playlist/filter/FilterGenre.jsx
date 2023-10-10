/* eslint-disable */
// import tracks from '../../../../Tracks';
import { Filters } from './filterStyle';
import { useGanreContext } from '../../../../hooks/ganreState';
import { useEffect } from 'react';

export const FilterGenre = ({ playlist, setCurrentPlaylist, setPlaylist }) => {
  const arr = playlist.map((item) => item.genre);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index);

  const { ganreState, setGanreState } = useGanreContext();

  const handleFilter = (item) => {
    if (item === 'All') {
      setGanreState([]);
      setCurrentPlaylist(playlist);
      setPlaylist(playlist);
    } else {
      ganreState.includes(item)
        ? setGanreState(ganreState.filter((x) => x !== item))
        : setGanreState([...ganreState, item]);
      // const newPlaylist = playlist.filter((el) => el.genre === item);

      // setCurrentPlaylist(newPlaylist);
      // setPlaylist(newPlaylist)
      // ganreState.includes(item) ? setGanreState(ganreState.filter((x) => x !== item)) : setGanreState([...ganreState, item])
    }
  };

  useEffect(() => {
    setCurrentPlaylist(
      ganreState.length !== 0
        ? playlist.filter((el) => ganreState.includes(el.genre))
        : playlist,
    );
  }, [ganreState]);

  const filterGenreItems = arr2.map((item) => (
    <li
      key={item}
      className={
        ganreState.includes(item) ? 'filters-item-choose' : 'filters-item'
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

        {filterGenreItems}
      </ul>
    </Filters>
  );
};
