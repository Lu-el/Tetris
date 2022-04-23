import { Game } from './modules/game.js';
import { View } from './modules/view.js';
import { Controller } from './modules/controler.js';

export const SIZE_BLOCK = 50;
export const COLOMS = 10;
export const ROWS = 20;

const game = new Game();
const view = new View(document.querySelector('.container'));
const controller = new Controller(game, view);

controller.init('NumpadEnter');

