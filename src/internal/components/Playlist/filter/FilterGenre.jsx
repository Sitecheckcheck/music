/* eslint-disable */
// import { useEffect } from 'react';
import { Filters } from './filterStyle';
import { useGanreContext } from '../../../../hooks/ganreState';
import { useAuthorContext } from '../../../../hooks/authorState';

export const FilterGenre = ({ playlist, setCurrentPlaylist, setPlaylist }) => {
  const { authorState } = useAuthorContext();

  const arrFromOtherFilter =
    authorState.length !== 0
      ? playlist.filter((elem) => authorState.includes(elem.author))
      : playlist;

  const arr = arrFromOtherFilter.map((item) => item.genre);
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
    }
  };

  // useEffect(() => {
  //   let arrPlaylist =
  //     ganreState.length === 0 && authorState.length === 0
  //       ? playlist
  //       : ganreState.length === 0
  //       ? playlist.filter((el) => authorState.includes(el.author))
  //       : authorState.length === 0
  //       ? playlist.filter((el) => ganreState.includes(el.genre))
  //       : playlist.filter(
  //           (el) =>
  //             ganreState.includes(el.genre) || authorState.includes(el.author),
  //         );

  //   if (dateState.includes('Сначала старые')) {
  //     const arr3 = arrPlaylist.filter((x) => x.release_date);
  //     arrPlaylist = arr3.sort(
  //       (a, b) => parseFloat(a.release_date) - parseFloat(b.release_date),
  //     );
  //   } else if (dateState.includes('Сначала новые')) {
  //     const arr3 = arrPlaylist.filter((x) => x.release_date);
  //     arrPlaylist = arr3.sort(
  //       (a, b) => parseFloat(b.release_date) - parseFloat(a.release_date),
  //     );
  //   }

  //   setCurrentPlaylist(arrPlaylist);
  // }, [ganreState]);

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
        <li className="filters-item-all" onClick={() => handleFilter('All')}>
          Снять фильтры
        </li>

        {filterGenreItems}
      </ul>
    </Filters>
  );
};
