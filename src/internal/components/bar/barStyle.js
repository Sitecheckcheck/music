import styled from 'styled-components';

export const Bar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: rgba(28, 28, 28, 1);

  .bar__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .bar__player-progress {
    width: 100%;
    height: 5px;
    background: #2e2e2e;
  }

  .bar__player-block {
    height: 73px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .time-duration {
    padding-right: 5px;
    width: 100%;
    text-align: right;
  }
`;

export const BarPlayer = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;

  .player__controls {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 27px 0 31px;
  }

  .player__track-play {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
  }
`;

export const BarVolumeBlock = styled.div`
  width: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 92px 0 0;

  .volume__content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .volume__image {
    width: 13px;
    height: 18px;
    margin-right: 17px;
  }

  .volume__progress {
    width: 109px;
  }

  .volume__svg {
    width: 13px;
    height: 18px;
    fill: transparent;
  }

  .volume__progress-line {
    width: 109px;
  }
`;

export const PlayerBtnPrev = styled.div`
  margin-right: 23px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .player__btn-prev-svg {
    width: 15px;
    height: 14px;
  }
`;

export const PlayerBtnPlay = styled.div`
  margin-right: 23px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .player__btn-play-svg {
    width: 22px;
    height: 20px;
    fill: #d9d9d9;
  }
`;

export const PlayerBtnNext = styled.div`
  margin-right: 28px;
  fill: #a53939;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .player__btn-next-svg {
    width: 15px;
    height: 14px;
    fill: inherit;
    stroke: #d9d9d9;
  }
`;

export const BtnIcon = styled.div`
  // &:hover svg {
  //   fill: transparent;
  //   stroke: #acacac;
  //   cursor: pointer;
  // }

  &:active svg {
    fill: transparent;
    stroke: #fff;
    cursor: pointer;
  }

  &:active .track-play__dislike-svg {
    fill: #696969;
    stroke: #fff;
    cursor: pointer;
  }

  &:active .track-play__like-svg {
    fill: #696969;
    stroke: #fff;
    cursor: pointer;
  }
`;

export const PlayerBtnRepeat = styled(BtnIcon)`
  margin-right: 24px;
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .player__btn-repeat-svg {
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }

  .player__btn-repeat-svg-choose {
    width: 18px;
    height: 12px;
    fill: transparent;
    stroke: #fff;
  }
`;

export const PlayerBtnShuffle = styled(BtnIcon)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 5px;

  .player__btn-shuffle-svg {
    width: 19px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }
`;
/* eslint-disable */
export const TrackPlayContain = styled.div`
  width: auto;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas: 'image author' 'image album';
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  .track-play__image {
    width: 51px;
    height: 51px;
    background-color: #313131;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin-right: 12px;
    /* -ms-grid-row: 1;
    -ms-grid-row-span: 2;
    -ms-grid-column: 1; */
    grid-area: image;
  }

  .track-play__svg {
    width: 18px;
    height: 17px;
    fill: transparent;
    stroke: #4e4e4e;
  }

  .track-play__author {
    /* -ms-grid-row: 1;
    -ms-grid-column: 2; */
    grid-area: author;
    min-width: 49px;
  }

  .track-play__author-link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    white-space: nowrap;
  }

  .track-play__album {
    /* -ms-grid-row: 2;
    -ms-grid-column: 2; */
    grid-area: album;
    min-width: 49px;
  }

  .track-play__album-link {
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 24px;
    color: #fff;
  }
`;

export const TrackPlayLikeDis = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 26%;

  .track-play__like,
  .track-play__dislike {
    padding: 5px;
  }

  .track-play__like-svg {
    width: 14px;
    height: 12px;
    fill: transparent;
    stroke: #696969;
  }

  .track-play__dislike {
    margin-left: 28.5px;
  }

  .track-play__dislike-svg {
    width: 14.34px;
    height: 13px;
    fill: transparent;
    stroke: #696969;
  }
`;
