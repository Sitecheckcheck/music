/* eslint-disable */
// import tracks from '../../../../Tracks';
import { Filters } from './filterStyle';

export const FilterGenre = ({ playlist, setCurrentPlaylist, setPlaylist }) => {
  const arr = playlist.map((item) => item.genre);
  let arr2 = arr.filter((item, index) => arr.indexOf(item) === index);

  const handleFilter = (item) => {
 
    if (item == 'All') {
      setCurrentPlaylist(playlist);
      setPlaylist(playlist)
    } else {
      const newPlaylist = playlist.filter((el) => el.genre === item);

      setCurrentPlaylist(newPlaylist);
      setPlaylist(newPlaylist)
    }
  };

  const filterGenreItems = arr2.map((item) => (
    <li key={item} className="filters-item" onClick={() => handleFilter(item)}>
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
