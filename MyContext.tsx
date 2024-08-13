'use client'

import React, { createContext, ReactNode, useContext, useState } from "react";

interface MyContextProps {
  path: string;
  setPath: React.Dispatch<React.SetStateAction<string>>;
}

const MyContext = createContext<MyContextProps | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [path, setPath] = useState<string>("default value");

  return (
    <MyContext.Provider value={{ path, setPath }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (context === undefined) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
