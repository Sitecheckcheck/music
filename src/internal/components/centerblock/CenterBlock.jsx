import { useEffect, useState } from 'react';
import PlaylistItem from './playlist/PlaylistItem';
import sprite from '../../../img/icon/sprite.svg';
import PlaylistItemEmpty from './playlist/PlayListItemEmpty';
import Filter from './filter/Filter';
import * as S from './centerBlockStyle';
import { getPlaylist } from '../../api';

function CenterBlock({ isLoad, setIsLoad, selectTrack, setSelectTrack }) {
  const [playlist, setplaylist] = useState([]);
  const [getTracksError, setGetTracksError] = useState(null);
 
  const getAllTracks = async () => {
    try {
      const tracks = await getPlaylist();
      setplaylist(tracks);
      setIsLoad(false);
    } catch (error) {
      setGetTracksError(
        `Не удалось загрузить плейлист, попробуйте позже ${error.message}`,
      );
    } finally {
      setIsLoad(false);
    }
  };

  useEffect(() => {
    getAllTracks();
  }, []);

  const playListItems = playlist.map((item) => (
    <PlaylistItem
      selectTrack={selectTrack}
      setSelectTrack={setSelectTrack}
      item={item}
      key={item.id}
      track={item.name}
      artist={item.author}
      album={item.album}
      time={`${Math.floor(item.duration_in_seconds / 60)}:${
        item.duration_in_seconds % 60 < 10
          ? `0${item.duration_in_seconds % 60}`
          : item.duration_in_seconds % 60
      }`}
    />
  ));

  return (
    <S.MainCenterblock>
      <div className="centerblock__search search">
        <S.SearchSvg>
          <use xlinkHref={`${sprite}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <Filter />

      <div className="centerblock__content">
        <S.ContentTitle>
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <S.playlistTitleSvg alt="time">
              <use xlinkHref={`${sprite}#icon-watch`} />
            </S.playlistTitleSvg>
          </div>
        </S.ContentTitle>

        {isLoad ? (
          <S.ContentPlaylist>
            <PlaylistItemEmpty />
          </S.ContentPlaylist>
        ) : (
          <S.ContentPlaylist>
            {getTracksError ? <p>{getTracksError}</p> : playListItems}
          </S.ContentPlaylist>
        )}
      </div>
    </S.MainCenterblock>
  );
}

export default CenterBlock;
