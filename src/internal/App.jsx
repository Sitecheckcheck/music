/* eslint-disable */
import { useState } from 'react';
import AppRoutes from '../rotes';

function App() {
  const [isLoad, setIsLoad] = useState(true);
  return <AppRoutes  isLoad={isLoad} setIsLoad={setIsLoad} />
}

export default App;
