//import SceneWorld from './sceneWorld.js'
export default class SceneMain extends Phaser.Scene{
    constructor(){
        super({key:"SceneMain"})
    }

    preload(){
      this.load.path = 'assets/';
      this.load.image('logo', 'images/logo.png');
    }

    create(){
      this.add.image(this.scale.width / 2, this.scale.height / 2, 'logo');
      //this.time.addEvent({ delay: 1500, callback: () => {this.scene.start("SceneWorld");}, callbackScope: this, startAt: 0 });
    }
}
