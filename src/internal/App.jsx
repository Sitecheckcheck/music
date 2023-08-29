/* eslint-disable */
import { useState } from 'react';
import AppRoutes from '../rotes';
import { UserNameContext } from '../contexts/userName';

function App() {
  const [isLoad, setIsLoad] = useState(true);

  const [userName, setUserName] = useState(localStorage.getItem('user'));

  // const value = {userName, setUserName}

  return (
    <UserNameContext.Provider value={{userName, setUserName}}>
      <AppRoutes isLoad={isLoad} setIsLoad={setIsLoad} user={userName} />
    </UserNameContext.Provider>
  );
}

export default App;
