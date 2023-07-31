import React, { useDebugValue, useEffect, useState } from 'react';

const useApp = () => {
  const [mute, setMute] = useState(false);
  const debouncedMute = useDebounce(mute, 3000);
  useDebugValue(mute ? `Data loaded: ${mute} items` : 'Loading...');
  useEffect(() => {
    console.log('debouncedMutedebouncedMute', debouncedMute);
  }, [debouncedMute]);

  const muteClicked = () => {
    setMute((pre) => !pre);
  };

  return {
    mute,
    setMute,
    muteClicked
  };
};
export default useApp;

const useDebounce = (value: any, delay: number) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
