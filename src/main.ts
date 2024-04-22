import './style.css';
import { createApp } from '@sonnetjs/core';
import App from './App';

const app = createApp(App());

app.mount("#app");
