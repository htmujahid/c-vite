import './style.css';
import { render } from '@sonnetjs/core';
import App from './App';

(() => {
  const AppComponent = new App();
  render('app', AppComponent.get());
  AppComponent.loadScripts();
})()

