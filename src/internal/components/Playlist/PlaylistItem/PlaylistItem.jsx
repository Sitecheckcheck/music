// /* eslint-disable */
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as S from './playliststyle';
import { selectTrackFunction } from '../../../../store/sliceSelectTrack';
import { useIsPlayingContext } from '../../../../hooks/IsPlaying';
import {
  useAddFavoriteMutation,
  useDeleteFavoriteMutation,
} from '../../../../services/playlistApi';
import { playlistForShaffleFunction } from '../../../../store/slicePlaylistForShaffle';

export const PlaylistItem = (props) => {
  const [addFavorite] = useAddFavoriteMutation();
  const [deleteFavorite] = useDeleteFavoriteMutation();

  const userName = useSelector((state) => state.userName.userName);
  const stared = props.item.stared_user
    ? props.item.stared_user.find((element) => element.username === userName)
    : false;
  const dispatch = useDispatch();
  const selectTrack = useSelector((state) => state.selectTrack.selectTrack);
  const isPlayingContext = useIsPlayingContext();
  const { isPlaying } = isPlayingContext;
  const [isLike, setIsLike] = useState(stared);

  const handleLike = async () => {
    if (isLike || props.listName === 'Мои треки') {
      await deleteFavorite(props.item.id);
      setIsLike(null);
    } else {
      await addFavorite(props.item.id);
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
                src="/music/img/PointTrack.png"
                alt="point"
                className={isPlaying ? 'playing-dot' : ''}
              />
            ) : (
              <svg className="track__title-svg" alt="music">
                <use xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-note`} />
              </svg>
            )}
          </div>
          <div className="track__title-text">
            <div
              className="track__title-link"
              onClick={() => {
                props.setPlaylist(props.list);
                dispatch(selectTrackFunction(props.item));
                dispatch(playlistForShaffleFunction(props.list));
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
        <S.TrackTime>
          <div
            onClick={(e) => {
              e.stopPropagation();
              handleLike();
            }}
          >
            {stared || props.listName === 'Мои треки' ? (
              <img
                src="/music/img/like.svg"
                className="track__time-svg"
                alt="time"
              />
            ) : (
              <svg className="track__time-svg" alt="time">
                <use xlinkHref={`${'/music/img/icon/sprite.svg'}#icon-like`} />
              </svg>
            )}
          </div>

          <span className="track__time-text">{props.time}</span>
        </S.TrackTime>
      </div>
    </S.PlaylistItem>
  );
};
