import React from 'react';

const Video = () => {
    return ( 
        <video autoPlay muted loop playsInline className='projectimage'>
            <source src="./ThreeJSScene.mp4" type="video/mp4"/>
            Sorry, your browser doesn't support mp4s!
        </video>
    );
}
 
export default Video;