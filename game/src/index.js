import Phaser from 'phaser'

import GameScene from './Scenes/game';

import config from './config';

class Game extends Phaser.Game {
    constructor() {
        super(config);

        this.scene.add("game", GameScene);

        this.scene.start("game");
    }
}

window.game = new Game();