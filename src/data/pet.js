// @flow
import { generateUUID, getListRandomizer } from '../lib/random.js';

/*::
export type PetID = string;

export type Pet = {
  id: PetID,
  name: string,
};
*/

const petNames = [
  'dumpling',
  'kimchi',
  'sausage',
  'donut',
  'croissant',
  'pudding',
  'bannana',
  'apple',
  'brioche',
  'pickle',
  'olive',
  'kale',
  'rocket',
  'penut butter',
  'cashew'
];

const generatePetName = getListRandomizer(petNames);

export const generatePet = ()/*: Pet*/ => {
  const id = generateUUID();
  const name = generatePetName();
  return { id, name };
};
