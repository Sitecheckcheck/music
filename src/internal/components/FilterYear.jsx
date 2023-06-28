import '../App.css';
import tracks from './Tracks';

function FilterYear() {
  const filterYearItems = tracks.map((item) => (
    <li key={item.id} className="filters-item">
      {item.release_date.substring(0, 4)}
    </li>
  ));

  return (
    <div className="filters">
      <ul className="filtersList">{filterYearItems}</ul>
    </div>
  );
}

export default FilterYear;
