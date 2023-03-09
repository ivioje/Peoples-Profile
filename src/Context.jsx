import React, { useState, createContext } from 'react';

// create a new context object
export const CurrentItemContext = createContext();

// define a provider component that wraps the components that need access to the shared state
export const CurrentItemProvider = ({ children }) => {
  const [currentItemId, setCurrentItemId] = useState(null);

  return (
    <CurrentItemContext.Provider value={{ currentItemId, setCurrentItemId }}>
      {children}
    </CurrentItemContext.Provider>
  );
};
