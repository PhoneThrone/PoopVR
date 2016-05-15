import React from 'react';
import DinoScene from '../../aframe/components/DinoScene';
import WarScene from '../../aframe/components/WarScene';
import VideoScene from '../../aframe/components/VideoScene';
import MoonScene from '../../aframe/components/MoonScene';

const pooScenes = {
  war: WarScene,
  dino: DinoScene,
  moon: MoonScene,
}

class PickYourPoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  loadPoo(poo) {
    this.setState({ scene: pooScenes[poo] });
  }

  loadVideoPoo(video) {
    this.setState({
      scene: () => <VideoScene video={video} />
    });
  }

  render () {
    if (this.state.scene) {
      return <this.state.scene />;
    } else {
      return (
        <div className="center-align">
          <h1>PoopVR</h1>
          <i class="em em-poop"></i>
          <h3  className="center-align">Poop Scenes</h3>
          <ul>
            <div onClick={() => this.loadPoo('war')} className="wrapper">
              <li className="center-align">World War Two</li>
            </div>
            <div onClick={() => this.loadPoo('dino')} className="wrapper">
              <li className="center-align">Prehistoric Poo</li>
            </div>
            <div onClick={() => this.loadPoo('moon')} className="wrapper">
              <li className="center-align">Lunar Poo</li>
            </div>
          </ul>
          <h3>Theatrical Experiences</h3>
            <ul>
              <li onClick={() => this.loadVideoPoo('SharkShipwreck')}>Shark Shit</li>
              <li onClick={() => this.loadVideoPoo('RollerCoaster')}>Throne Ride</li>
            </ul>
        </div>
      );
    }
  }
};

module.exports = PickYourPoo;
