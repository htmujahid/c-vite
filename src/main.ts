import './style.css';
import { render } from '@sonnetjs/core';
import Counter from './counter';

(() => {
  const CounterComponent = new Counter();
  render('app', CounterComponent.get());
  CounterComponent.loadScripts();
})()

