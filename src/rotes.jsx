import { Route, Routes } from 'react-router-dom';
import NotFound from './internal/pages/not-found';
import MainPage from './internal/pages/mainpage';
import Signin from './internal/pages/signin/signin';
import Signup from './internal/pages/signup/signup';
import MyTracks from './internal/pages/mytracks';
import { ProtectedRoute } from './internal/components/protected-route';
import { ListMusic } from './internal/pages/listmusic';

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(props.user)} />}>
        <Route path="" element={<MainPage />} />
      </Route>

      <Route element={<ProtectedRoute isAllowed={Boolean(props.user)} />}>
        <Route path="mytrack" element={<MyTracks />} />
      </Route>

      <Route element={<ProtectedRoute isAllowed={Boolean(props.user)} />}>
        <Route path="playlist/:id" element={<ListMusic />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
