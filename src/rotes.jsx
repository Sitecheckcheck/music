import { Route, Routes } from 'react-router-dom';
import NotFound from './internal/pages/not-found';
import MainPage from './internal/pages/mainpage';
import Signin from './internal/pages/signin/signin';
import Signup from './internal/pages/signup/signup';
import MyTracks from './internal/pages/mytracks';
import Compil from './internal/pages/compil';

function AppRoutes() {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="signin" element={<Signin />} />
      <Route path="signup" element={<Signup />} />
      <Route path="" element={<MainPage />} />
      <Route path="mytrack" element={<MyTracks />} />
      <Route path="compil" element={<Compil />} />
    </Routes>
  );
}

export default AppRoutes;
