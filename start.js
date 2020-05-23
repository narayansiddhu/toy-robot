'use strict';

process.title = "--oO The Toy Robot Oo--"; // sets a terminal title

/**
 * It is the starting point of the application.
 */

const Game = require('./controllers/roboticGame');

new Game().run();
