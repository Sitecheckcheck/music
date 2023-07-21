import Cookies from 'js-cookie';
import AppRoutes from '../rotes';

const user = Cookies.get('token');

function App() {
  return <AppRoutes user={user} />;
}

export default App;
