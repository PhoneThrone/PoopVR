import React from 'react';

class MoonScene extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <a-scene>

      <a-assets>
        <a-asset-item id='fighterDae' src='/assets/tiefighter.dae' />
        <a-asset-item id='stall' src='/assets/Toilet_Stall.dae' />
        <img id='moon' src='/assets/moon.jpg' />
        <img id='ground' src='/assets/moonfloor.jpg' />
      </a-assets>

      <a-sky src='#moon' rotation='60 0 0' />

      <a-light type='directional' color='#AAA' position='5 5 -2' intensity='1' />
      <a-light type='ambient' color='#AAA' intensity='0.05' />


      <a-plane id='ground' src='#ground' material='side:double' 
        position='0 0 -3' rotation='-90 0 0' width='10' height='10' />

      <a-entity sound="src: /assets/moonsounds.mp3; autoplay: true; loop: true; volume: 10;" position='0 1.5 0'>
        <a-camera id='camera' wasd-controls-enabled='true'/>
      </a-entity>

      <a-entity position='-47 25 0' rotation='0 180 0'>
        <a-collada-model src='#fighterDae' position='65 2 0' rotation='10 0 26'/>
        <a-collada-model src='#fighterDae' position='85 5 0' rotation='10 0 20'/>
        <a-animation
          begin='5000' 
          attribute='rotation'
          dur='8000'
          from='0 180 0'
          to='0 -180 0'
          repeat='indefinite'
          easing='linear'
        />
      </a-entity>

      <a-entity id='siren' position='10 3 -15' />

      <a-collada-model scale='2.3 1.5 2' src='#stall' position='1.2 0 1' rotation='0 180 0'/>

      </a-scene>
    );
  }
};

module.exports = MoonScene;
