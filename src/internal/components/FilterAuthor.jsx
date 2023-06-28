import '../App.css';
import tracks from './Tracks';

function FilterAuthor() {
  const filterAuthorItems = tracks.map((item) => (
    <li key={item.id} className="filters-item">
      {item.author}
    </li>
  ));

  return (
    <div className="filters">
      <ul className="filtersList">{filterAuthorItems}</ul>
    </div>
  );
}

export default FilterAuthor;
