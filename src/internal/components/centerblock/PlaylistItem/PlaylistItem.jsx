// /* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import sprite from '../../../../img/icon/sprite.svg';
import * as S from './playliststyle';
import { selectTrackFunction } from '../../../../store/sliceSelectTrack';
import point from '../../../../img/PointTrack.png';
import { useIsPlayingContext } from '../../../../hooks/IsPlaying';
import { addFavorite, deleteFavorite } from '../../../api';
import likeIcon from '../../../../img/like.svg';

export const PlaylistItem = (props) => {
  const userName = useSelector((state) => state.userName.userName);
  const stared = props.item.stared_user
    ? props.item.stared_user.find((element) => element.email === userName)
    : true;
  const dispatch = useDispatch();
  const selectTrack = useSelector((state) => state.selectTrack.selectTrack);
  const isPlayingContext = useIsPlayingContext();
  const { isPlaying } = isPlayingContext;
  const [isLike, setIsLike] = useState(stared);

  const handleLike = async () => {
    const accessToken = localStorage.getItem('access');
    if (isLike) {
      const response = await deleteFavorite(props.item.id, accessToken);
      console.log(response.detail);
      setIsLike(null);
    } else {
      const response = await addFavorite(props.item.id, accessToken);
      console.log(response.detail);
      setIsLike(true);
    }
  };

  return (
    <S.PlaylistItem>
      <div className="playlist__track track">
        <S.TrackTitle>
          <div className="track__title-image">
            {selectTrack && props.item && props.item.id === selectTrack.id ? (
              <img
                src={point}
                alt="point"
                className={isPlaying ? 'playing-dot' : ''}
              />
            ) : (
              <svg className="track__title-svg" alt="music">
                <use xlinkHref={`${sprite}#icon-note`} />
              </svg>
            )}
          </div>
          <div className="track__title-text">
            <div
              className="track__title-link"
              onClick={() => {
                props.setPlaylist(props.list);
                dispatch(selectTrackFunction(props.item));
              }}
            >
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
        <S.TrackTime onClick={() => handleLike()}>
          {isLike ? (
            <img src={likeIcon} className="track__time-svg" alt="time" />
          ) : (
            <svg className="track__time-svg" alt="time">
              <use xlinkHref={`${sprite}#icon-like`} />
            </svg>
          )}

          <span className="track__time-text">{props.time}</span>
        </S.TrackTime>
      </div>
    </S.PlaylistItem>
  );
};
