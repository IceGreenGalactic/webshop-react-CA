import React, { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [itemAdded, setItemAdded] = useState(false);

  const triggerNotification = () => {
    setItemAdded(true);
    setTimeout(() => {
      setItemAdded(false);
    }, 3000); 
  };

  return (
    <NotificationContext.Provider value={{ itemAdded, triggerNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
