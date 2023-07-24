import sprite from '../../../img/icon/sprite.svg';
import BarEmpty from '../../../img/BarEmpty.png';
import * as S from './barStyle';

function Bar({ isLoad }) {
  return (
    <S.Bar>
      <div className="bar__content">
        <div className="bar__player-progress" />
        <div className="bar__player-block">
          <S.BarPlayer>
            <div className="player__controls">
              <S.PlayerBtnPrev>
                <svg className="player__btn-prev-svg" alt="prev">
                  <use xlinkHref={`${sprite}#icon-prev`} />
                </svg>
              </S.PlayerBtnPrev>
              <S.PlayerBtnPlay>
                <svg className="player__btn-play-svg" alt="play">
                  <use xlinkHref={`${sprite}#icon-play`} />
                </svg>
              </S.PlayerBtnPlay>
              <S.PlayerBtnNext>
                <svg className="player__btn-next-svg" alt="next">
                  <use xlinkHref={`${sprite}#icon-next`} />
                </svg>
              </S.PlayerBtnNext>
              <S.PlayerBtnRepeat>
                <svg className="player__btn-repeat-svg" alt="repeat">
                  <use xlinkHref={`${sprite}#icon-repeat`} />
                </svg>
              </S.PlayerBtnRepeat>
              <S.PlayerBtnShuffle>
                <svg className="player__btn-shuffle-svg" alt="shuffle">
                  <use xlinkHref={`${sprite}#icon-shuffle`} />
                </svg>
              </S.PlayerBtnShuffle>
            </div>
            <div className="player__track-play track-play">
              {isLoad ? (
                <img src={BarEmpty} alt="" />
              ) : (
                <S.TrackPlayContain>
                  <div className="track-play__image">
                    <svg className="track-play__svg" alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </svg>
                  </div>
                  <div className="track-play__author">
                    <a className="track-play__author-link" href="http://">
                      Ты та...
                    </a>
                  </div>
                  <div className="track-play__album">
                    <a className="track-play__album-link" href="http://">
                      Баста
                    </a>
                  </div>
                </S.TrackPlayContain>
              )}
              <S.TrackPlayLikeDis>
                <div className="track-play__like _btn-icon">
                  <svg className="track-play__like-svg" alt="like">
                    <use xlinkHref={`${sprite}#icon-like`} />
                  </svg>
                </div>
                <div className="track-play__dislike _btn-icon">
                  <svg className="track-play__dislike-svg" alt="dislike">
                    <use xlinkHref={`${sprite}#icon-dislike`} />
                  </svg>
                </div>
              </S.TrackPlayLikeDis>
            </div>
          </S.BarPlayer>
          <S.BarVolumeBlock>
            <div className="volume__content">
              <div className="volume__image">
                <svg className="volume__svg" alt="volume">
                  <use xlinkHref={`${sprite}#icon-volume`} />
                </svg>
              </div>
              <div className="volume__progress _btn">
                <input
                  className="volume__progress-line _btn"
                  type="range"
                  name="range"
                />
              </div>
            </div>
          </S.BarVolumeBlock>
        </div>
      </div>
    </S.Bar>
  );
}

export default Bar;
