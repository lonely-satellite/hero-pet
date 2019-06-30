// @flow
import { createElement as h } from '../lib/react.js';
/*::
import type { Hero } from '../data/hero';

type HeroRoomProps = {
  hero: Hero,
  onExplore: () => void,
}
*/
const button = (onClick, ...children) =>h('button', { onClick }, ...children);
const progress = (value, max) => h('progress', { value, max });
const p = (...children) => h('p', {}, ...children);

export const HeroRoom = ({ hero, onExplore }/*: HeroRoomProps*/) => (
  h('div', { className: 'room' },
    button(null, `${hero.name} is relaxing quietly in their room.`),
    p(`${hero.name} has ${10 - hero.energy} energy left. `, progress(10 - hero.energy, 10)),
    button(null, `Feed ${hero.name} some Food`),
    button(onExplore, `${hero.name} should go out and Explore!`),
  )
);