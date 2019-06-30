// @flow
import { html, createElement as h } from '../lib/react.js';
import { Plural } from './Plural.js';

/*::
import type { Hero } from '../data/hero';

type Props = {
  heroes: Array<Hero>,
};
*/
const p = (...children) => h('p', {}, ...children);
const span = (...children) => h('span', {}, ...children);
const div = (...children) => h('div', {}, ...children);
const button = (onClick, ...children) => h('button', { onClick }, ...children);
const progress = (value, max) => h('progress', { value, max });

const PluralHeroes = ({ heroes }) => h(Plural, {
  elements: heroes,
  renderElement: hero => button(null, hero.name),
  renderJoiner: () => span(', '),
  renderFinalJoiner: () => span(' and '),
});

const HeroesDescription = ({ heroes }) => {
  if (heroes.length === 0) {
    return null;
  }
  if (heroes.length === 1) {
    const [hero] = heroes;
    return p(button(null, hero.name), ' is relaxing in their room.');
  }
  return p(h(PluralHeroes, { heroes }), ' are relaxing in their rooms.');
};

export const Heroes = ({ heroes }/*: Props*/) => {
  return div(
    h(HeroesDescription, { heroes }),
    ...heroes.map(hero => div(
      p('Energy: ', progress(3 - hero.energy, 3)),
      div(button(() => console.log('Explore'), 'Explore!')),
    ))
  );
};