import '../App.css';
// import { useState } from 'react';
import tracks from './Tracks';

function FilterGenre() {
  const arr = tracks.map((item) => item.genre);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index);

  // const [activeItem, setActivItem] = useState(false);

  const filterGenreItems = arr2.map((item) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li
      key={item}
      // onClick={() => {
      //   setActivItem(!activeItem);
      // }}
      // className={activeItem ? 'filters-item-active filters-item' : 'filters-item'}
      className="filters-item"
    >
      {item}
    </li>
  ));

  return (
    <div className="filters">
      <ul className="filtersList">{filterGenreItems}</ul>
    </div>
  );
}

export default FilterGenre;
