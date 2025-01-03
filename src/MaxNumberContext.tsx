import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the context's value
interface MaxNumberContextType {
  maxNumber: number;
  setMaxNumber: React.Dispatch<React.SetStateAction<number>>;
}

// Create the context with a default value (empty initially)
const MaxNumberContext = createContext<MaxNumberContextType | undefined>(undefined);

// Create a provider component
export const MaxNumberProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [maxNumber, setMaxNumber] = useState<number>(0);

  return (
    <MaxNumberContext.Provider value={{ maxNumber, setMaxNumber }}>
      {children}
    </MaxNumberContext.Provider>
  );
};

// Create a custom hook to easily use the context
// eslint-disable-next-line react-refresh/only-export-components
export const useMaxNumber = (): MaxNumberContextType => {
  const context = useContext(MaxNumberContext);
  if (!context) {
    throw new Error('useMaxNumber must be used within a MaxNumberProvider');
  }
  return context;
};
