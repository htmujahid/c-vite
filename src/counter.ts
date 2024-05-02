import { $component, SonnetComponent } from '@sonnetjs/core';

class Counter extends SonnetComponent {
  counter = 0;

  script(): void {
    const button = this.parent.querySelector('#counter') as HTMLButtonElement;

    button.addEventListener('click', () => {
      this.counter += 1;
      button.innerText = `count is ${this.counter}`;
    });
  }

  get() {
    return /*html*/ `
      <div id="${this.hashId}">
        <button id="counter" type="button" class="btn">count is ${this.counter}</button>
      </div>
    `;
  }
}

export default $component(Counter);