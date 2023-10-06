import tracks from '../../../../Tracks';
import { Filters } from './filterStyle';

export const FilterAuthor = () => {
  const arr = tracks.map((item) => item.author);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index).sort();

  const filterAuthorItems = arr2.map((item) => (
    <li key={item} className="filters-item">
      {item}
    </li>
  ));

  return (
    <Filters>
      <ul className="filtersList">{filterAuthorItems}</ul>
    </Filters>
  );
};
