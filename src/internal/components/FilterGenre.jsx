/* eslint-disable */
// import { useState } from 'react';
import '../App.css';
import tracks from './Tracks';

function FilterGenre() {
  const arr = tracks.map((item) => item.genre);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index);

  const filterGenreItems = arr2.map((item) => (
    <li key={item} className="filters-item">
      {item}
    </li>
  ));

  //   const [activeItem, setActivItem] = useState(null)

  return (
    <div className="filters">
      <ul className="filtersList">{filterGenreItems}</ul>
    </div>
  );
}

export default FilterGenre;
