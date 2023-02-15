import React, {createContext, useState} from 'react';

interface ImageColors {
  primaryColor: string;
  secondaryColor: string;
}

interface ContextPros {
  colors: ImageColors;
  prevColors: ImageColors;
  setColors: (colors: ImageColors) => void;
  setPreviousColors: (colors: ImageColors) => void;
}

export const GradientContext = createContext({} as ContextPros);

export const GradientProvider = ({children}: any) => {
  const [mainColors, setMainColors] = useState<ImageColors>({
    primaryColor: 'transparent',
    secondaryColor: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<ImageColors>({
    primaryColor: 'transparent',
    secondaryColor: 'transparent',
  });

  const setColors = (colors: ImageColors) => {
    setMainColors(colors);
  };

  const setPreviousColors = (colors: ImageColors) => {
    setPrevColors(colors);
  };

  return (
    <GradientContext.Provider
      value={{
        colors: mainColors,
        prevColors,
        setColors,
        setPreviousColors,
      }}>
      {children}
    </GradientContext.Provider>
  );
};
