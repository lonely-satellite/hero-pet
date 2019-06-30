// @flow
import { generateUUID, getListRandomizer } from '../lib/random.js';
/*::
import type { Pet } from './pet';

type HeroID = string;

export type Hero = {
  id: HeroID,
  name: string,
  energy: number,
};
*/

export const generateHero = (pet/*: Pet*/)/*: Hero*/ => ({
  id: generateUUID(),
  name: pet.name,
  energy: 0,
});