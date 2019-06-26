import { render, html } from 'https://unpkg.com/preact-hook-htm@0.3.1-beta?module';
import { HeroPet } from './HeroPet.js';

const main = () => {
  const element = document.createElement('div');
  document.body.append(element);
  render(html`<${HeroPet} />`, element);
};

main();