/* eslint-disable */
import { useSelector } from 'react-redux';
import sprite from '../../../img/icon/sprite.svg';
import * as S from './centerBlockStyle';
import { Playlist } from './Playlist/Playlist';

export const CenterBlock = ({setPlaylist}) => {
  // const { playlistUI, status, error } = useSelector(
  //   (state) => state.playlistUI,
  // );

  const { playlist, status, error } = useSelector((state) => state.playlist);


  return (
    <S.MainCenterblock>
      <div className="centerblock__search search">
        <S.SearchSvg>
          <use xlinkHref={`${sprite}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <Playlist
        // listUI={playlistUI}
        status={status}
        error={error}
        list={playlist}
        setPlaylist={setPlaylist}
      />
    </S.MainCenterblock>
  );
};
