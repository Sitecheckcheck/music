/* eslint-disable */
import { useGetSelectionPlaylistQuery } from '../../../services/selectionPlaylistApi';
import { Playlist } from '../Playlist/Playlist';
import * as S from '../centerblock/centerBlockStyle';

export const ListCenterBlock = ({ ListName, setPlaylist }) => {
  
  const {
    data = [],
    error,
    isLoading,
  } = useGetSelectionPlaylistQuery(ListName.id);

  

  return (
    <S.MainCenterblock>
      <div className="centerblock__search search">
        <S.SearchSvg>
          <use xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </div>
      <h2 className="centerblock__h2">{ListName.listName}</h2>
      {error ? (
        <h1>{error.error}</h1>
      ) : (
        <Playlist
          setPlaylist={setPlaylist}
          status={isLoading ? 'loading' : 'resolved'}
          list={isLoading ? [] : data.items}
        />
      )}
    </S.MainCenterblock>
  );
};
