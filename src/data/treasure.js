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
  'particular',
  'odd',
  'stinky',
  'legendary',
  'wet',
  'soft',
  'dirty',
  'picture of a',
  'sticky'
];

const getTreasureAdjective = getListRandomizer(treasureAdjectives);

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
  'cup',
  'ball'
];

const getTreasureNoun = getListRandomizer(treasureNouns);

/*::
export type Treasure = string;
*/

export const generateTreasure = ()/*: Treasure*/ => `${getTreasureAdjective()} ${getTreasureNoun()}`