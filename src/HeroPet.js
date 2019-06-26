// @flow
import { html, useState, useEffect, useReducer } from 'https://unpkg.com/preact-hook-htm@0.3.1-beta?module';
import { Inn } from './components/Inn.js';
import { HeroName } from './components/HeroName.js';
import { ExploreMenu } from './components/ExploreMenu.js';

import { gameReducer, DEFAULT_GAME_STATE } from './reducers.js';
import { createExploreAction, createPetAction, createGotoNextDayAction } from './actions.js';

export const HeroPet = () => {
  const [gameState, dispatch] = useReducer(gameReducer, DEFAULT_GAME_STATE);
  const { heroState } = gameState;
  const { pets, energy, allTreasure, xp } = heroState;

  const canPet = pets < 3;
  const canExplore = energy > 0;

  return html`
    <${Inn} />
    <progress className="energyBar" max="10" value=${energy}> ${energy * 10}% </progress>
    <button onClick=${() => dispatch(createGotoNextDayAction())}>Go to Sleep</button>
    <button disabled=${!canPet} onClick=${() => dispatch(createPetAction())}>${canPet ? 'Pet the Dog' : 'Too much Pet!'}</button>
    <${ExploreMenu} onExplore=${(location, treasure) => dispatch(createExploreAction(treasure))} disabled=${!canExplore} />
    <p>Experience: ${xp}</p>
    <h2>Treasure:</h2>
    <ul>
      ${allTreasure.map(treasure => html`<p>${treasure}</p>`)}
    </ul>
  `;
};