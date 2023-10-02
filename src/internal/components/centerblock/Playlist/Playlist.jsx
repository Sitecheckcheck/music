// /* eslint-disable */
import { PlaylistItemEmpty } from '../PlaylistItem/PlayListItemEmpty';
import { Filter } from '../filter/Filter';
import * as S from "../centerBlockStyle";
import sprite from '../../../../img/icon/sprite.svg'
import { PlaylistItem } from '../PlaylistItem/PlaylistItem';

export const Playlist = ({playlistUI, playlist, status, error}) => {
  
  const playListItems = playlistUI.map((item) => (
    <PlaylistItem
      item={
        playlist.filter((x) => x.id === item.id)[0]
      }
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
    <>
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

        {status === 'loading' && (
          <S.ContentPlaylist>
            <PlaylistItemEmpty />
          </S.ContentPlaylist>
        )}

        {status === 'rejected' && (
          <S.ContentPlaylist>
            <h1>{error}</h1>
          </S.ContentPlaylist>
        )}

        {status === 'resolved' && (
          <S.ContentPlaylist>{playListItems}</S.ContentPlaylist>
        )}
      </div>
    </>
  )
};
