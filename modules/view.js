import { SIZE_BLOCK, COLOMS, ROWS } from '../index.js';

export class View {
  constructor(container) {
    this.container = container;
    this.preview();
  }

  colors = {
    J: 'black',
    I: 'pink',
    O: 'orange',
    L: 'blue',
    2: 'purple',
    T: 'brown',
    S: 'green',
  };

  canvas = document.createElement('canvas');
  context = this.canvas.getContext('2d');
  
  preview() {
    const pretext = document.createElement('div');
    pretext.classList.add('pretext');
    pretext.textContent = 'Нажмите ENTER чтобы начать игру';
    this.container.append(pretext);
  }

  removePreview() {
    if(document.querySelector('.pretext')) {
      document.querySelector('.pretext').remove()
    }
  }

  init() {
    this.canvas.classList.add('game-area');
    this.container.append(this.canvas);
    this.canvas.width = SIZE_BLOCK * COLOMS;
    this.canvas.height = SIZE_BLOCK * ROWS;
  }
  
  showArea(area)  {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    for (let y = 0; y < area.length; y++) {
      const line = area[y];

      for (let x = 0; x < line.length; x++) {
        const block = line[x];
        if (block !== 'o') {
          this.context.fillStyle = this.colors[block];
          this.context.strokeStyle = 'white';
          this.context.fillRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
          this.context.strokeRect(x * SIZE_BLOCK, y * SIZE_BLOCK, SIZE_BLOCK, SIZE_BLOCK);
        }
      }
    }
  };
}