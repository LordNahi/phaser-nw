import Phaser from "phaser"

import package from '../../package.json';

// Phaser Config

export default {
    type: Phaser.AUTO,
    width: package.window.width,
    height: package.window.height,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
};