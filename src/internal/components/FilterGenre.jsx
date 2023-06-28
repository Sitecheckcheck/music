// import { useState } from 'react';
import '../App.css';
import tracks from './Tracks';

function FilterGenre() {
  const filterGenreItems = tracks.map((item) => (
    <li key={item.id} className="filters-item">
      {item.genre}
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
