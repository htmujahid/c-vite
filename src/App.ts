import { SonnetElement } from '@sonnetjs/core';
import type { Component } from '@sonnetjs/core';
import Counter from './Counter';

const CounterComponent = new Counter();

export default class App extends SonnetElement {
  components: Component[] = [CounterComponent];

  get() {
    return CounterComponent.get();
  }
}
