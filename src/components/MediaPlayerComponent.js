import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";

import ReactPlayer from "react-player";

const YAHYA_VIDEO_URL='https://youtu.be/Mv4u3SRU3K0'

function MediaPlayerComponent() {
    const playerRef = useRef(null);
    const [loading, setLoading] = useState(true);

    const handleReady = () => {
        setLoading(false);
      };

    return (
        <div>
            {loading && (
                <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 10,
                }}
                >
                <ClipLoader color="black" loading={loading} size={50} />
                </div>
            )}
            <ReactPlayer 
                ref={playerRef}
                url={YAHYA_VIDEO_URL}
                controls={true}
                onReady={handleReady}
            />
        </div>
    )
}

export default MediaPlayerComponent;