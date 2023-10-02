/* eslint-disable */
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import * as S from './styles';
import { logOut } from '../../App';
import { selectTrackFunction } from '../../../store/sliceSelectTrack';
import { fetchPlaylistUI, playlistUIFunction } from '../../../store/slicePlaylistUI';
import { fetchPlaylist, playlistFunction } from '../../../store/slicePlaylist';

export const NavMenu = () => {
  const dispatch = useDispatch();
  const favoritPLUI = useSelector(
    (state) => state.favoritePlaylistUI.favoritePlaylistUI,
  );
  const favoritPL = useSelector(
    (state) => state.favoritePlaylist.favoritePlaylist,
  );

  return (
    <S.NavMenuStyle>
      <S.MenuList>
        <S.MenuItem>
          <NavLink
            to="/"
            // onClick={() => {
            //   dispatch(fetchPlaylistUI());
            //   dispatch(fetchPlaylist());
            // }}
          >
            Главное
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink
            to="/mytrack"
            // onClick={() => {
            //   dispatch(playlistUIFunction(favoritPLUI));
            //   dispatch(playlistFunction(favoritPL));
            // }}
          >
            Мой плейлист
          </NavLink>
        </S.MenuItem>
        <S.MenuItem>
          <NavLink
            to="/signin"
            onClick={() => {
              logOut();
              dispatch(selectTrackFunction(null));
            }}
          >
            Выйти
          </NavLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenuStyle>
  );
};
