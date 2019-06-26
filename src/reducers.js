// @flow
/*::
import type { Treasure } from './data/treasure';
import type { HeroPetAction } from './actions';
*/

/*::
type HeroState = {
  energy: number,
  pets: number,
  xp: number,
  allTreasure: Array<Treasure>,
};
*/

const DEFAULT_HERO_STATE = {
  energy: 10,
  pets: 0,
  xp: 0,
  allTreasure: [],
}

const heroReducer = (state, action)/*: HeroState*/ => {
  switch (action.type) {
    case 'pet': {
      return {
        ...state,
        pets: state.pets + 1,
        energy: Math.min(10, state.energy + 5),
      }
    }
    case 'goto-next-day': {
      return {
        ...state,
        energy: 10,
        pets: 0,
      }
    }
    case 'explore': {
      if (action.treasure) {
        return {
          ...state,
          allTreasure: [action.treasure, ...state.allTreasure],
          xp: state.xp + action.treasure.xp,
          energy: Math.max(0, state.energy - 1),
        }
      }
      return {
        ...state,
        energy: Math.max(0, state.energy - 1),
      };
    }
    default: {
      return state;
    }
  }
}
/*::
type GameState = {
  heroState: HeroState,
};
*/

export const DEFAULT_GAME_STATE = {
  heroState: DEFAULT_HERO_STATE,
};

export const gameReducer = (state/*: GameState*/ = DEFAULT_GAME_STATE, action/*: HeroPetAction*/)/*: GameState*/ => {
  return {
    heroState: heroReducer(state.heroState, action),
  }
};