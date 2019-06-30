import { render, html } from './lib/react.js';
import { HeroPet } from './HeroPet.js';

const main = () => {
  const element = document.createElement('div');
  document.body.append(element);
  render(html`<${HeroPet} />`, element);
};

main();