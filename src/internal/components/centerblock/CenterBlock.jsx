// /* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as S from './centerBlockStyle';
import { Playlist } from '../Playlist/Playlist';
import { fetchPlaylist } from '../../../store/slicePlaylist';

export const CenterBlock = ({ setPlaylist }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylist());
  }, [dispatch]);

  const { playlist, status, error } = useSelector((state) => state.playlist);

  return (
    <S.MainCenterblock>
      <div className="centerblock__search search">
        <S.SearchSvg>
          <use xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </div>
      <h2 className="centerblock__h2">Треки</h2>

      <Playlist
        status={status}
        error={error}
        list={playlist}
        setPlaylist={setPlaylist}
      />
    </S.MainCenterblock>
  );
};
