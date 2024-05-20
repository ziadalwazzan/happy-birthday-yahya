import './App.css';

import { useState } from 'react';

import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

/* Pick a theme of your choice */
import original from 'react95/dist/themes/original';

/* Original Windows95 font (optional) */
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';

import UpdateAlert from './components/UpdateAlert';
import MediaPlayerComponent from './components/MediaPlayerComponent';

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
  const [showUpdateAlert, setShowUpdateAlert] = useState(true);
  const [backgroundColor, setBackgroundColor] = useState('#060084');


  return (
    <div 
    className="App"
    style={{
      backgroundColor: backgroundColor
    }}
    >
        <GlobalStyles />
        <ThemeProvider theme={original}>
          {
            showUpdateAlert &&
            <UpdateAlert 
              setShowUpdateAlert={setShowUpdateAlert}
              setBackgroundColor={setBackgroundColor}
            />
          }
          <div>
            {!showUpdateAlert && <MediaPlayerComponent />}
          </div>
        </ThemeProvider>
    </div>
  );
}

export default App;
