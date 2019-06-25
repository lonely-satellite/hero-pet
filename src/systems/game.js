import { createTreasure } from '../data/treasure.js';

const DEFAULT_STATE = {
  energy: 10,
  days: 0,
  pets: 0,
  treasure: [],
};

const updateTreasure = (oldTreasure) => {
  if (Math.random() < 0.5) {
    return [createTreasure(), ...oldTreasure]
  }
  return oldTreasure;
};

export const updateGameState = (event, state = DEFAULT_STATE) => {
  switch (event.type) {
    case 'day-passed': {
      return {
        ...state,
        days: state.days + 1,
        energy: 10,
        pets: 0,
      }
    }
    case 'pet-dog': {
      return {
        ...state,
        energy: Math.min(state.energy + 5, 10),
        pets: state.pets + 1,
      }
    }
    case 'explore': {
      return {
        ...state,
        treasure: updateTreasure(state.treasure),
        energy: state.energy - 2,
      }
    }
    default:
      return state;
  }
};