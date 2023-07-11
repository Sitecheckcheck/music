import sprite from '../../../../img/icon/sprite.svg';
import * as S from './playliststyle';

function PlaylistItem(props) {
  return (
    <S.PlaylistItem>
      <div className="playlist__track track">
        <S.TrackTitle>
          <div className="track__title-image">
            <svg className="track__title-svg" alt="music">
              <use xlinkHref={`${sprite}#icon-note`} />
            </svg>
          </div>
          <div className="track__title-text">
            <a className="track__title-link" href="http://">
              {props.track}
              <span className="track__title-span">{props.trackAbout}</span>
            </a>
          </div>
        </S.TrackTitle>
        <S.TrackAuthor>
          <a className="track__author-link" href="http://">
            {props.artist}
          </a>
        </S.TrackAuthor>
        <S.TrackAlbum>
          <a className="track__album-link" href="http://">
            {props.album}
          </a>
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
