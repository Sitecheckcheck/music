import React, { useContext } from 'react';

export const selectTrackContext = React.createContext(null);

export function useSelectTrackContext() {
  const selectTrack = useContext(selectTrackContext);

  return selectTrack;
}