import '../../../App.css';
import tracks from '../../../../Tracks';

function FilterYear() {
  const arr = tracks.map((item) => item.release_date);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index).sort();

  const filterYearItems = arr2.map((item) => (
    <li key={item} className="filters-item">
      {item.substring(0, 4)}
    </li>
  ));

  return (
    <div className="filters">
      <ul className="filtersList">{filterYearItems}</ul>
    </div>
  );
}

export default FilterYear;
