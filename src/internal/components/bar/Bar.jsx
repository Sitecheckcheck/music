import { useEffect, useRef, useState } from 'react';
import sprite from '../../../img/icon/sprite.svg';
import BarEmpty from '../../../img/BarEmpty.png';
import * as S from './barStyle';
import ProgressBar from './ProgressBar';

function Bar({ isLoad, selectTrack }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isLoop, setIsLoop] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [data, setData] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  function strPadLeft(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }

  const secondsToTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time - minutes * 60;
    const finalTime = `${strPadLeft(minutes, '0', 2)}:${strPadLeft(
      seconds,
      '0',
      2,
    )}`;
    return finalTime;
  };
  
  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handlePrev = () => {
    // alert('кнопка пока не реализована');
  };

  const handleNext = () => {
    // alert('кнопка пока не реализована');
  };

  const handleShuffle = () => {
    // alert('кнопка пока не реализована');
  };

  const handleLoop = () => {
    audioRef.current.loop = !audioRef.current.loop;
    setIsLoop(!isLoop);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    if (data) {
      audioRef.current.currentTime = data;
      setData(null);
    }
    
    audioRef.current.addEventListener('timeupdate', () => {
      setCurrentTime(audioRef.current.currentTime);
    });
  });

  useEffect(() => {
    handleStart();
  }, [selectTrack]);

  useEffect(() => {
    audioRef.current.volume = volume / 100;
    audioRef.current.loop = isLoop;
  }, [isLoop, volume]);

  const onLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  return (
    <>
      <audio
        controls
        ref={audioRef}
        src={selectTrack.track_file}
        style={{ marginTop: 20 }}
        autoPlay
        onLoadedMetadata={onLoadedMetadata}
      >
        <track kind="captions" />
      </audio>

      <S.Bar>
        <div className="bar__content">
          <p className="time-duration">
            {`${secondsToTime(Math.floor(currentTime))} / ${secondsToTime(
              Math.floor(duration),
            )}`}
          </p>
          <ProgressBar
            selectTrack={selectTrack}
            currentTime={currentTime}
            setCurrentTime={setCurrentTime}
            setData={setData}
            duration={duration}
          />
          <div className="bar__player-block">
            <S.BarPlayer>
              <div className="player__controls">
                <S.PlayerBtnPrev onClick={handlePrev}>
                  <svg className="player__btn-prev-svg" alt="prev">
                    <use xlinkHref={`${sprite}#icon-prev`} />
                  </svg>
                </S.PlayerBtnPrev>
                <S.PlayerBtnPlay onClick={togglePlay}>
                  <svg className="player__btn-play-svg" alt="play">
                    <use
                      xlinkHref={
                        isPlaying
                          ? `${sprite}#icon-pause`
                          : `${sprite}#icon-play`
                      }
                    />
                  </svg>
                </S.PlayerBtnPlay>
                <S.PlayerBtnNext onClick={handleNext}>
                  <svg className="player__btn-next-svg" alt="next">
                    <use xlinkHref={`${sprite}#icon-next`} />
                  </svg>
                </S.PlayerBtnNext>
                <S.PlayerBtnRepeat onClick={handleLoop}>
                  <svg
                    className={`player__btn-repeat-svg ${
                      isLoop ? 'choose' : ''
                    }`}
                    alt="repeat"
                  >
                    <use xlinkHref={`${sprite}#icon-repeat`} />
                  </svg>
                </S.PlayerBtnRepeat>
                <S.PlayerBtnShuffle onClick={handleShuffle}>
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
                        {selectTrack.name}
                      </a>
                    </div>
                    <div className="track-play__album">
                      <a className="track-play__album-link" href="http://">
                        {selectTrack.author}
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
                    min={0}
                    max={100}
                    onChange={(e) => setVolume(e.target.value)}
                  />
                </div>
              </div>
            </S.BarVolumeBlock>
          </div>
        </div>
      </S.Bar>
    </>
  );
}

export default Bar;
