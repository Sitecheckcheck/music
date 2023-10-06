import tracks from '../../../../Tracks';
import { Filters } from './filterStyle';

export const FilterYear = () => {
  const arr = tracks.map((item) => item.release_date);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index).sort();

  const filterYearItems = arr2.map((item) => (
    <li key={item} className="filters-item">
      {item.substring(0, 4)}
    </li>
  ));

  return (
    <Filters>
      <ul className="filtersList">{filterYearItems}</ul>
    </Filters>
  );
};
