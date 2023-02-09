import React, { useEffect } from 'react'

type Props = { currentSongDetail: any }

declare global {
    interface Window { YT: any; }
    interface Window { onYouTubeIframeAPIReady: any }
}

const YoutubePlayer = ({ currentSongDetail }: Props) => {

    useEffect(() => {
        // On mount, check to see if the API script is already loaded

        if (!window.YT) { // If not, load the script asynchronously
            const tag = document.createElement('script');
            tag.src = 'https://www.youtube.com/iframe_api';

            // onYouTubeIframeAPIReady will load the video after the script is loaded
            window.onYouTubeIframeAPIReady = loadVideo;

            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag!.parentNode!.insertBefore(tag, firstScriptTag);

        } else { // If script is already there, load the video directly
            loadVideo();
        }
    })

    const loadVideo = () => {
        // the Player object is created uniquely based on the id in props
        const player = new window.YT.Player(`youtube-player-${currentSongDetail.youtubeVideoId}`, {
            videoId: currentSongDetail.youtubeVideoId,
            height: '100',
            width: '100',
            events: {
                onReady: onPlayerReady,
            },
        });
    };

    const onPlayerReady = (event: any) => {
        event.target.playVideo();
    };

    return (
        <div className="classes.container">
            <div id={`youtube-player-${currentSongDetail.youtubeVideoId}`} className="classes.video" />
        </div>
    )
}

export default YoutubePlayer