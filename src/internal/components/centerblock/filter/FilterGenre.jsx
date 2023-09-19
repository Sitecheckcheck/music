import tracks from '../../../../Tracks';
import { Filters } from './filterStyle';

export const FilterGenre = () => {
  const arr = tracks.map((item) => item.genre);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index);

  const filterGenreItems = arr2.map((item) => (
    <li key={item} className="filters-item">
      {item}
    </li>
  ));

  return (
    <Filters>
      <ul className="filtersList">{filterGenreItems}</ul>
    </Filters>
  );
};
