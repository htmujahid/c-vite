export function render(id: string, element: HTMLElement) {
  if (process.env.NODE_ENV === 'development') {
    const app = document.getElementById(id);
    if (app) {
      app.innerHTML = '';
      app.appendChild(element);
    }
  }
}
