import React, { useState } from 'react';

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export const ThemeProvider = (props) => {
  const [dark, setDark] = useState(true);

  const toggle = () => {
    setDark(!dark);
  }

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      {props.children}
    </ThemeContext.Provider>
  )
}