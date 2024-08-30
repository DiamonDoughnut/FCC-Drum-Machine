import React, { useState } from 'react';
import Drums from './Drums';
import audioObj from './AudioObj.js';

const SoundName = function (props) {
  return (
    <div className="col-l-4 display center-align">
      <div id="display">
        <h2>{props.audioName}</h2>
      </div>
    </div>
  )
}

const App = function () {
  const [audioName, setAudioName] = React.useState('');

  const changeAudioName = (text) => {
    setAudioName(text);
  };

  return (
    <div className="container drum-machine row" id="drum-machine">
      <Drums audioObj={audioObj} changeName={changeAudioName} />
      <SoundName audioName={audioName} />
    </div>
  )
}

export default App;
