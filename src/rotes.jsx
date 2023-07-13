import { Route, Routes } from 'react-router-dom';
import NotFound from './internal/pages/not-found';
import MainPage from './internal/pages/mainpage';
import Signin from './internal/pages/signin/signin';
import Signup from './internal/pages/signup/signup';
import MyTracks from './internal/pages/mytracks';
import Listday from './internal/pages/listday';
import List100 from './internal/pages/list100';
import Listindi from './internal/pages/listindi';
import { ProtectedRoute } from './internal/components/protected-route';

function AppRoutes(props) {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="" element={<MainPage />} />

      <Route element={<ProtectedRoute isAllowed={Boolean(props.user)} />}>
        <Route path="mytrack" element={<MyTracks />} />
      </Route>

      <Route path="listday" element={<Listday />} />
      <Route path="list100" element={<List100 />} />
      <Route path="listindi" element={<Listindi />} />
    </Routes>
  );
}

export default AppRoutes;
