import { Button, WindowHeader, Window, WindowContent } from 'react95';

import { useState } from 'react';

function UpdateAlert( { setShowUpdateAlert, setBackgroundColor} ) {
    const [position, setPosition] = useState({ top: '78%', left: '55%' });

    const moveButton = () => {
        const randX = Math.floor(Math.random() * (window.innerWidth - 25)/2);
        const randY = Math.floor(Math.random() * (window.innerHeight - 25)/2);
        setPosition({ top: `${randY}px`, left: `${randX}px` });
    };

    const handleButtonClick = () => {
        // Update the state in the parent components
        setBackgroundColor('#fdf9db');
        setShowUpdateAlert(false);
      };

    return (
        <Window
        style={{ 
            backgroundColor: '#c6c6c6',
            color: 'white',
            padding: 20,
            borderRadius: 10,
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        }}
        className="Window">
                <WindowHeader
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap"
                }}
                >
                <span>
                    {`UPDATE REQUIRED`}
                </span>
                <Button
                    style={{ marginTop: "1px" }}
                    size={"sm"}
                    square
                    disabled='true'
                >
                    <span style={{ fontWeight: "bold", transform: "translateY(-1px)" }}>
                    x
                    </span>
                </Button>
                </WindowHeader>
                <WindowContent>
                    <text>It seems you are still 24. Please update your age to 25 to view this website. 🤣🫵🏼</text>
                    <br/>
                    <br/>
                    <text>Would you like to update now?</text>
                    <br/>
                    <br/>
                <Button
                    style={{ position: 'absolute', top: position.top, left: position.left }}
                    onMouseEnter={moveButton}
                >
                    No
                </Button>
                <Button
                style={{ position: 'absolute', top: "78%", left: "35%" }}
                onClick={handleButtonClick}
                >
                    Yes
                </Button>
                </WindowContent>
        </Window>
    )
}

export default UpdateAlert;