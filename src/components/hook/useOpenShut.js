import { useState, useEffect } from 'react'

export const useOpenShut = () => {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const currentDay = now.getDay();
      const currentHour = now.getHours();

      if ((currentDay === 2 && currentHour >= 5 && currentHour < 16) || (currentDay === 4 && currentHour >= 10 && currentHour < 16)
        || (currentDay === 6 && currentHour >= 10 && currentHour < 16)) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkStatus();

    const interval = setInterval(checkStatus, 60000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return isOpen
}
