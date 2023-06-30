import { useEffect, useState } from 'react';
import '../App.css';
import PlaylistItem from './PlaylistItem';
import sprite from '../../img/icon/sprite.svg';
import PlaylistItemEmpty from './PlayListItemEmpty';
import tracks from './Tracks';
import Filter from './Filter';

function CenterBlock() {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoad(!isLoad);
    }, 1000);
  }, []);

  const playListItems = tracks.map((item) => (
    <PlaylistItem
      key={item.id}
      track={item.name}
      artist={item.author}
      album={item.album}
      time={`${Math.floor(item.duration_in_seconds / 60)}:${
        item.duration_in_seconds % 60
      }`}
    />
  ));

  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref={`${sprite}#icon-search`} />
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <Filter />

      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref={`${sprite}#icon-watch`} />
            </svg>
          </div>
        </div>

        {isLoad ? (
          <PlaylistItemEmpty />
        ) : (
          <div className="content__playlist playlist">{playListItems}</div>
        )}
      </div>
    </div>
  );
}

export default CenterBlock;
