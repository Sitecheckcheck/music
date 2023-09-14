import React, { useContext } from 'react';

export const logOutContext = React.createContext(null);

export function useLogOutContext() {
  const logOut = useContext(logOutContext);

  return logOut;
}