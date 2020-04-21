var SceneUtils = new Phaser.Scene('SceneUtils');
// ON ANOTHER SCENE IMPORT THIS: import SceneUtils from './sceneUtils.js'

SceneUtils.debuggerScreen = function (game, layer, bool)
{//SceneUtils.debugOnScreen(this, worldLayer, false);
  if (bool == true) {
    const debugGraphics = game.add.graphics().setAlpha(0.75);
    layer.renderDebug(debugGraphics, {
      tileColor: null, // Color of non-colliding tiles
      collidingTileColor: new Phaser.Display.Color(243, 134, 48, 255), // Color of colliding tiles
      faceColor: new Phaser.Display.Color(40, 39, 37, 255) // Color of colliding face edges
    });
    game.physics.world.createDebugGraphic();
  }
}

SceneUtils.loadingScreen = function (game)
{//SceneUtils.loadingScreen(this);
  var game = game;
  var progressBar = game.add.graphics();
  var progressBox = game.add.graphics();
  progressBox.fillStyle(0x222222, 0.8);
  progressBox.fillRect(240, 270, 320, 50);
  var width = game.cameras.main.width;
  var height = game.cameras.main.height;
  var loadingText = game.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading...',
      style: {
          font: '20px monospace',
          fill: '#ffffff'
      }
  });
  var percentText = game.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
          font: '18px monospace',
          fill: '#ffffff'
      }
  });
  var assetText = game.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
          font: '18px monospace',
          fill: '#ffffff'
      }
  });
  assetText.setOrigin(0.5, 0.5);
  percentText.setOrigin(0.5, 0.5);
  loadingText.setOrigin(0.5, 0.5);

  game.load.on('progress', function (value) {
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
      percentText.setText(parseInt(value * 100) + '%');
  });

  game.load.on('fileprogress', function (file) {
      assetText.setText('Loading asset: ' + file.key);
  });

  game.load.on('complete', function () {
    progressBar.destroy();
    progressBox.destroy();
    loadingText.destroy();
    percentText.destroy();
    assetText.destroy();
  });
}

export default SceneUtils
