import PlaylistItem from '../../centerblock/playlist/PlaylistItem';
import sprite from '../../../../img/icon/sprite.svg';
import tracks from '../../../../Tracks';
import * as S from '../../centerblock/centerBlockStyle';

function ListdayCenterBlock(props) {
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
    <S.MainCenterblock>
      <div className="centerblock__search search">
        <S.SearchSvg>
          <use xlinkHref={`${sprite}#icon-search`} />
        </S.SearchSvg>
        <S.SearchText type="search" placeholder="Поиск" name="search" />
      </div>
      <h2 className="centerblock__h2">{props.listNam}</h2>

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

        <S.ContentPlaylist>{playListItems}</S.ContentPlaylist>
      </div>
    </S.MainCenterblock>
  );
}

export default ListdayCenterBlock;
