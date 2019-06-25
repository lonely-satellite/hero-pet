import { render, html } from 'https://unpkg.com/preact-hook-htm@0.2.0-beta/dist/preact-hook-htm.esm.js?module';

const main = () => {
  const element = document.createElement('div');
  document.body.append(element);
  render(html`Hi babe`, element);
};

main();