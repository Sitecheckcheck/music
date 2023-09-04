/* eslint-disable */
import sprite from '../../../../img/icon/sprite.svg';
import * as S from './playliststyle';
import { useSelectTrackContext } from '../../../../contexts/selectTrack';

function PlaylistItem(props) {

  const selectTrackContext = useSelectTrackContext()
  let {setSelectTrack} = selectTrackContext

  function selectTrackFunction(item) {
    setSelectTrack(item)
  }

  return (
    <S.PlaylistItem>
      <div
        className="playlist__track track"
        onClick={() => {
          selectTrackFunction(props.item);
        }}
      >
        <S.TrackTitle>
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={`${sprite}#icon-note`} />
            </svg>
          </div>
          <div className="track__title-text">
            <div className="track__title-link">
              {props.track}
              <span className="track__title-span">{props.trackAbout}</span>
            </div>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <div className="track__author-link">{props.artist}</div>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <div className="track__album-link">{props.album}</div>
        </S.TrackAlbum>
        <S.TrackTime>
          <svg className="track__time-svg" alt="time">
            <use xlinkHref={`${sprite}#icon-like`} />
          </svg>
          <span className="track__time-text">{props.time}</span>
        </S.TrackTime>
      </div>
    </S.PlaylistItem>
  );
}

export default PlaylistItem;
