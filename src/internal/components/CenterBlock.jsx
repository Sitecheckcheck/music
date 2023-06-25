import "../App.css"
import PlaylistItem from "./PlaylistItem"
import sprite from "../../img/icon/sprite.svg"

function CenterBlock() {
  return (
    <div className="main__centerblock centerblock">
      <div className="centerblock__search search">
        <svg className="search__svg">
          <use xlinkHref={`${sprite}#icon-search`}></use>
        </svg>
        <input
          className="search__text"
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className="centerblock__h2">Треки</h2>
      <div className="centerblock__filter filter">
        <div className="filter__title">Искать по:</div>
        <div className="filter__button button-author _btn-text">
          исполнителю
        </div>
        <div className="filter__button button-year _btn-text">году выпуска</div>
        <div className="filter__button button-genre _btn-text">жанру</div>
      </div>
      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref={`${sprite}#icon-watch`}></use>
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <PlaylistItem
            track="Guilt"
            artist="Nero"
            album="Welcome Reality"
            time="4:44"
          />
          <PlaylistItem
            track="Elektro"
            artist="Dynoro, Outwork, Mr. Gee"
            album="Elektro"
            time="2:22"
          />
          <PlaylistItem
            track="I'm Fire"
            artist="Ali Bakgor"
            album="I'm Fire"
            time="2:22"
          />
          <PlaylistItem
            track="Non Stop "
            trackAbout="(Remix)"
            artist="Стоункат, Psychopath"
            album="Non Stop"
            time="4:12"
          />
          <PlaylistItem
            track="Run Run "
            trackAbout="(feat. AR/CO)"
            artist="Jaded, Will Clarke, AR/CO"
            album="Run Run"
            time="2:54"
          />
          <PlaylistItem
            track="Eyes on Fire "
            trackAbout="(Zeds Dead Remix)"
            artist="Blue Foundation, Zeds Dead "
            album="Eyes on Fire"
            time="5:20"
          />
          <PlaylistItem
            track="Mucho Bien "
            trackAbout="(Hi Profile Remix)"
            artist="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
            album="Mucho Bien"
            time="3:41"
          />
          <PlaylistItem
            track="Knives n Cherries"
            artist="minthaze"
            album="Captivating"
            time="1:48"
          />
          <PlaylistItem
            track="How Deep Is Your Love"
            artist="Calvin Harris, Disciples"
            album="How Deep Is Your Love"
            time="3:32"
          />
          <PlaylistItem
            track="Morena"
            artist="Tom Boxer"
            album="Soundz Made in Romania"
            time="3:36"
          />
          <PlaylistItem track="" artist="" album="" time="" />
        </div>
      </div>
    </div>
  )
}

export default CenterBlock
