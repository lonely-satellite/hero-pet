// @flow
import { generateUUID, getListRandomizer } from '../lib/random.js';
/*::
import type { Pet, PetID } from './pet';

export type HeroID = string;

export type Hero = {
  id: HeroID,
  name: string,
  energy: number,
  petId: PetID,
};
*/

export const generateHero = (pet/*: Pet*/)/*: Hero*/ => ({
  id: generateUUID(),
  name: pet.name,
  energy: 0,
  petId: pet.id,
});