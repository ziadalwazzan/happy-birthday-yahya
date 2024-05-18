import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

import { MenuList, MenuListItem, Separator, styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';


/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    const moveButton = () => {
        const randX = Math.floor(Math.random() * (window.innerWidth - 100));
        const randY = Math.floor(Math.random() * (window.innerHeight - 100));
        setPosition({ top: `${randY}px`, left: `${randX}px` });
    };

  return (
    <div className="App">
        <GlobalStyles />
        <ThemeProvider theme={original}>
          <MenuList>
            <MenuListItem>🎤 Sing</MenuListItem>
            <MenuListItem>💃🏻 Dance</MenuListItem>
            <Separator />
            <MenuListItem disabled>😴 Sleep</MenuListItem>
          </MenuList>
        </ThemeProvider>
        <button
              style={{ position: 'absolute', top: position.top, left: position.left }}
              onMouseEnter={moveButton} // Change to onMouseEnter
            >
              Move Me
            </button>
    </div>
  );
}

export default App;
