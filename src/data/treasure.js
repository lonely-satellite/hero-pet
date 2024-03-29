// @flow
import { getListRandomizer } from '../lib/random.js';

const treasureAdjectives = [
  'long',
  'shiny',
  'new',
  'scary',
  'strong',
  'weak',
  'bloody',
  'sharp',
  'fresh',
  'old',
  'ancient',
  'eldritch',
  'arcane',
  'short',
  'small',
  'big',
  'odd',
  'stinky',
  'legendary',
  'wet',
  'soft',
  'dirty',
  //'picture of a',
  // TODO: someday...
  'sticky',
  'prismatic',
  'cute',
  'broken',
  'friendly',
  'spiky',
  'strange',
  'weird'
];

const firstAdjectives = [
  ...treasureAdjectives,
  'particularly'
];

const secondAdjectives = [
  ...treasureAdjectives,
  'particular',
];

const getFirstAdjective = getListRandomizer(firstAdjectives);
const getSecondAdjective = getListRandomizer(secondAdjectives);

const treasureNouns = [
  'stick',
  'bone',
  'friend',
  'tin can',
  'leaf',
  'feather',
  'stone',
  'sword',
  'skull',
  'bag',
  'hat',
  'ball',
  'newspaper',
  'book',
  'robes',
  'glove',
  'shoe',
  'ring',
  'box',
  'orb'
];

const getTreasureNoun = getListRandomizer(treasureNouns);

/*::
export type Treasure = {
  name: string,
  xp: number,
};
*/

export const generateTreasure = ()/*: Treasure*/ => ({
  name: getFirstAdjective() + ' ' + getSecondAdjective() + ' ' + getTreasureNoun(),
  xp: Math.ceil(Math.random() * 3)
})