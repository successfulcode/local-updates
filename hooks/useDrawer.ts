import { useState } from 'react';

const useDrawer = () => {
  const [isDraweOpened, setIsDraweOpened] = useState(false);

  const openDrawer = () => setIsDraweOpened(true),
    closeDrawer = () => setIsDraweOpened(false),
    toggleDrawer = () => setIsDraweOpened(!isDraweOpened);

  return {
    isDraweOpened,
    openDrawer,
    closeDrawer,
    toggleDrawer
  };
};

export default useDrawer;