import '../../../App.css';
import tracks from '../../../../Tracks';

function FilterAuthor() {
  const arr = tracks.map((item) => item.author);
  const arr2 = arr.filter((item, index) => arr.indexOf(item) === index).sort();

  const filterAuthorItems = arr2.map((item) => (
    <li key={item} className="filters-item">
      {item}
    </li>
  ));

  return (
    <div className="filters">
      <ul className="filtersList">{filterAuthorItems}</ul>
    </div>
  );
}

export default FilterAuthor;
