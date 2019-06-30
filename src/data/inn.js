// @flow
import { getListRandomizer } from '../lib/random.js';

const innNames = [
  'Tavern',
  'Drunkards Rest',
  'Loyal Knight',
  'Ladies Night'
];

export const getRandomInnName = getListRandomizer(innNames);