/* eslint-disable */
// import tracks from '../../../../Tracks';
import { Filters } from './filterStyle';

export const FilterYear = ({ playlist, setCurrentPlaylist, setPlaylist }) => {

  const arr = playlist.map((item) => item.release_date);

  const arr11 = arr.map((item) => item ? item.substring(0, 4) : '-')
 
  const arr2 = arr11.filter((item, index) => arr11.indexOf(item) === index).sort();

  const handleFilter = (item) => {
    if (item == 'All') {
      setCurrentPlaylist(playlist);
      setPlaylist(playlist);
    } else {
      const newPlaylist = playlist.filter((el) => el.release_date ? el.release_date.substring(0, 4) === item : "-");
      setCurrentPlaylist(newPlaylist);
      setPlaylist(newPlaylist);
    }
  };

  const filterYearItems = arr2.map((item) => (
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

        {filterYearItems}
      </ul>
    </Filters>
  );
};
