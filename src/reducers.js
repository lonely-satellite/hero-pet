// @flow
import { generatePet } from './data/pet.js';
import { getRandomInnName } from './data/inn.js';
import { generateHero } from './data/hero.js';
/*::
import type { Item } from './data/item';
import type { HeroPetAction } from './actions';
import type { Hero } from './data/hero';
import type { Pet } from './data/pet';
*/

/*::
type HeroState = {
  heroes: Array<Hero>,
  passingPets: Array<Pet>,
};
*/

const DEFAULT_HERO_STATE = {
  passingPets: [],
  heroes: [],
}

const heroReducer = (state, action)/*: HeroState*/ => {
  switch (action.type) {
    case 'offered-room': {
      return {
        ...state,
        heroes: [
          ...state.heroes,
          generateHero(action.passingPet),
        ],
        passingPets: state.passingPets.filter(pet => action.passingPet.id !== pet.id)
      }
    }
    case 'day-passed': {
      const passingPetCount = Math.ceil(Math.random() * 5);
      const passingPets = [];
      for (let i = 0; i < passingPetCount; i++) {
        passingPets.push(generatePet());
      }
      return {
        ...state,
        passingPets,
        heroes: state.heroes.map(hero => ({ ...hero, energy: 0 })),
      }
    }
    /*
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
      */
    default: {
      return state;
    }
  }
}
/*::
type InnState = {
  days: number,
  openRooms: number,
  innName: string,
};
*/
const DEFAULT_INN_STATE = {
  days: 0,
  openRooms: 2,
  innName: getRandomInnName(),
};
const innReducer = (state, action) => {
  switch (action.type) {
    case 'offered-room': {
      return {
        ...state,
        openRooms: state.openRooms - 1,
      }
    }
    case 'changed-inn-name': {
      return {
        ...state,
        innName: action.newInnName,
      }
    }
    case 'day-passed': {
      return {
        ...state,
        days: state.days + 1,
      }
    }
    default:
      return state;
  }
};

/*::
type GameState = {
  heroState: HeroState,
  innState: InnState,
};
*/

export const DEFAULT_GAME_STATE = {
  heroState: DEFAULT_HERO_STATE,
  innState: DEFAULT_INN_STATE,
};

export const gameReducer = (state/*: GameState*/ = DEFAULT_GAME_STATE, action/*: HeroPetAction*/)/*: GameState*/ => {
  return {
    heroState: heroReducer(state.heroState, action),
    innState: innReducer(state.innState, action),
  }
};