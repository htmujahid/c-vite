import { $component, SonnetComponent } from '@sonnetjs/core';
import Counter from './counter';

class App extends SonnetComponent {
  get() {
    return Counter().get();
  }
}

export default $component(App);
