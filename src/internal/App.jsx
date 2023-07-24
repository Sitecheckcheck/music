import { useState } from 'react';
import Cookies from 'js-cookie';
import AppRoutes from '../rotes';

const user = Cookies.get('token');

function App() {
  const [isLoad, setIsLoad] = useState(true);
  return <AppRoutes user={user} isLoad={isLoad} setIsLoad={setIsLoad} />;
}

export default App;
