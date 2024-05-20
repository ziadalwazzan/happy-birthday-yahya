import './App.css';

import { useState } from 'react';

import { styleReset } from 'react95';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Confetti from 'react-confetti';

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
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYesClick = () => {
    setBackgroundColor('#fdf9db');
    setShowUpdateAlert(false);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3500); // Confetti lasts for 3 seconds
  };

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
              onYesClick={handleYesClick}
            />
          }
          <div>
            {!showUpdateAlert && <MediaPlayerComponent />}
            {showConfetti && <Confetti />}
          </div>
        </ThemeProvider>
    </div>
  );
}

export default App;
