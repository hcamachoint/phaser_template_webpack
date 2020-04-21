import Phaser from "phaser";;
import SceneMain from './scenes/sceneMain.js';

const w = window.innerWidth;
const h = window.innerHeight;

var config = {
  type: Phaser.AUTO,
  backgroundColor: '#000',
  width: 800,
  height: 600,
  mode: Phaser.Scale.FIT,
  autoCenter: Phaser.Scale.CENTER_BOTH,
  parent: 'game',
  pixelArt: true,
  scene: [SceneMain],
  fps: {
    target: 2,
    min: 2,
    forceSetTimeOut: true
  }
}

var game = new Phaser.Game(config);
