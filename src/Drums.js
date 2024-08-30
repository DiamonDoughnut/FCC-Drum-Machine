import React, { useEffect } from 'react';

const Drums = ({ audioObj, changeName }) => {
  // Activate sound when corresponding key pressed
  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = document.querySelector(`#${e.key.toUpperCase()}`);
      if (key === null) {
        return;
      }
      key.play();
      // Extract name from props of element
      const [audio] = audioObj.filter(audio => audio.key === e.key.toLowerCase());
      if (audio){changeName(audio.text);}
    }

    document.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [audioObj, changeName]);

  // Play sounds when clicking pads
  const PlaySound = (audio) => {
    const audioElement = document.querySelector(`#${audio.key.toUpperCase()}`);
    if (audioElement) {
      audioElement.play();
      changeName(audio.text);
    }
  }

  const renderPads = (audioObj) => {
    return audioObj.map((audio) => {
      const audioClipId = audio.path.split('/').pop().split('.')[0]; // Extract the audio clip ID from the path
      return (
        <div
          className='drum-pad center-align'
          key={audio.key}
          id={`drum-pad-${audioClipId}`} // Set the id to describe the audio clip
          onClick={() => PlaySound(audio)}
        >
          {audio.key.toUpperCase()}
          <audio
            className='clip'
            id={audio.key.toUpperCase()}
            src={audio.path}
          />
        </div>
      );
    });
  };

  return (
    <div className="drumpad-wrapper col-lg-4 my-4">
      {renderPads(audioObj)}
    </div>
  )
}

export default Drums;
