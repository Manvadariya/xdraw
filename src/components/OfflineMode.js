import React, { useState, useEffect } from 'react';

const OfflineMode = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [changes, setChanges] = useState([]);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      syncChanges();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const syncChanges = () => {
    // Implement the logic to sync changes with the server
    // For example, you can send the changes to the server using an API call
    // After syncing, clear the changes array
    setChanges([]);
  };

  const addChange = (change) => {
    setChanges((prevChanges) => [...prevChanges, change]);
  };

  return (
    <div className="offline-mode">
      {isOnline ? (
        <p>You are online</p>
      ) : (
        <p>You are offline. Changes will be synced once you are back online.</p>
      )}
    </div>
  );
};

export default OfflineMode;
