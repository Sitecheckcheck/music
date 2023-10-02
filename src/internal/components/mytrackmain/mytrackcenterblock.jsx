/* eslint-disable */
import { useSelector } from 'react-redux';
import sprite from '../../../img/icon/sprite.svg';
// import tracks from '../../../Tracks';
import * as S from '../centerblock/centerBlockStyle';
import { Playlist } from '../centerblock/Playlist/Playlist';

export const MyTracksCenterBlock = () => {
  const { favoritePlaylistUI, status, error } = useSelector(
    (state) => state.favoritePlaylistUI,
  );

  const { favoritePlaylist } = useSelector((state) => state.favoritePlaylist);

  return (
    <S.MainCenterblock>
      <div className="centerblock__search search">
        <S.SearchSvg>
          <use xlinkHref={`${sprite}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </div>
      <h2 className="centerblock__h2">Мои треки</h2>

      <Playlist playlistUI={favoritePlaylistUI} status={status} error={error} playlist={favoritePlaylist} />
    </S.MainCenterblock>
  );
};
