// @flow
/*::
import type { Treasure } from './data/treasure';
*/

/*::
export type ExploreAction = {
  type: 'explore',
  treasure?: Treasure,
};

export type PetAction = {
  type: 'pet',
};

export type GotoNextDayAction = {
  type: 'goto-next-day',
};
*/

export const createExploreAction = (treasure/*:: ?: Treasure*/)/*: ExploreAction*/ => ({
  type: 'explore',
  treasure,
});

export const createPetAction = ()/*: PetAction*/ => ({
  type: 'pet',
});


export const createGotoNextDayAction = ()/*: GotoNextDayAction*/ => ({
  type: 'goto-next-day',
});


/*::
export type HeroPetAction = 
  | ExploreAction
  | PetAction
  | GotoNextDayAction;
*/