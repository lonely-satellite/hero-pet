// @flow
import { html } from 'https://unpkg.com/preact-hook-htm@0.5.0-beta?module';
import { Plural } from './Plural.js';

/*::
import type { Hero } from '../data/hero';

type Props = {
  heroes: Array<Hero>,
};
*/

const PluralHeroes= ({ heroes }) => html`<${Plural}
  elements=${heroes}
  renderElement=${hero => html`<button>${hero.name}</button>`}
  renderJoiner=${() => html`<span>, </span>`}
  renderFinalJoiner=${() => html`<span> and </span>`}
/>`;

export const Heroes = ({ heroes }/*: Props*/) => {
  if (heroes.length === 0) {
    return null;
  }
  if (heroes.length === 1) {
    const [hero] = heroes;
    return html`<p><button>${hero.name}</> is relaxing in their room.</p>`;
  }
  return html`<p><${PluralHeroes} heroes=${heroes}/> are relaxing in their rooms.</p>`;
};