import React, { useContext } from 'react';

export const UserNameContext = React.createContext(localStorage.getItem('user'));

export function useUserNameContext() {
  const user = useContext(UserNameContext);

  return user;
}
