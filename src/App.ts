import { $component, SonnetComponent } from '@sonnetjs/core';
import Counter from './counter';

class App extends SonnetComponent {
  get() {
    return /*html*/ `
      <div>
        <a href="https://vitejs.dev" target="blank">
          <img src="https://vitejs.dev/logo.svg" class="logo" alt="Vite Logo" />
        </a>
        <h1>Vite</h1>
        <div class="card">
          ${Counter().get()}
          ${Counter().get()}
          ${Counter().get()}
        </div>
        <p class="read-the-docs">Edit src/main.ts and save to test HMR.</p>
      </div>
    `;
  }
}

export default $component(App);
