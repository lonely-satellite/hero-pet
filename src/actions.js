// @flow
/*::
import type { Treasure } from './data/treasure';
import type { Pet } from './data/pet';
*/

/*::
export type ExploreAction = {
  type: 'explore',
  treasure?: Treasure,
};

export type PetAction = {
  type: 'pet',
};

export type PassDayAction = {
  type: 'day-passed',
};

export type ChangeInnNameAction = {
  type: 'changed-inn-name',
  newInnName: string,
}

export type OfferRoomAction = {
  type: 'offered-room',
  passingPet: Pet,
}
*/

export const createExploreAction = (treasure/*:: ?: Treasure*/)/*: ExploreAction*/ => ({
  type: 'explore',
  treasure,
});

export const createPetAction = ()/*: PetAction*/ => ({
  type: 'pet',
});


export const passDay = ()/*: PassDayAction*/ => ({
  type: 'day-passed',
});

export const changeInnName = (newInnName/*: string */)/*: ChangeInnNameAction*/ => ({
  type: 'changed-inn-name',
  newInnName,
});

export const offerRoom = (passingPet/*: Pet */)/*: OfferRoomAction*/ => ({
  type: 'offered-room',
  passingPet,
});


/*::
export type HeroPetAction = 
  | ExploreAction
  | PetAction
  | PassDayAction
  | ChangeInnNameAction
  | OfferRoomAction
*/