import { useEffect, useState } from "react";

/**
 * Memantau perubahan status koneksi internet
 * @returns boolean
 */
export function useOnline() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    useEffect(() => {
      function handleOnline() {
        setIsOnline(true);
      }
      function handleOffline() {
        setIsOnline(false);
      }

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);

      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }, []);

    return isOnline;
};
