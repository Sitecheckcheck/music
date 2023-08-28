/* eslint-disable */
import React, { useState } from 'react';
import AppRoutes from '../rotes';
import { UserNameContext } from '../contexts/userName';

function App() {
  const [isLoad, setIsLoad] = useState(true);

  const [userName, setUserName] = useState(localStorage.getItem('user'));

  const value = {userName, setUserName}

  return (
    <UserNameContext.Provider value={ value }>
      <AppRoutes isLoad={isLoad} setIsLoad={setIsLoad} />
    </UserNameContext.Provider>
  );
}

export default App;
