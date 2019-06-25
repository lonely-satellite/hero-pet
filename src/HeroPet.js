import { html, useState, useEffect } from 'https://unpkg.com/preact-hook-htm?module';
import { Inn } from './components/Inn.js';
import { HeroName } from './components/HeroName.js';
import { ExploreMenu } from './components/ExploreMenu.js';

import { updateGameState } from './systems/game.js';

const useGame = () => {
  const [state, setState] = useState(updateGameState({ type: 'start' }));
  const dispatch = (event) => {
    setState(updateGameState(event, state));
  };
  return [state, dispatch];
}

export const HeroPet = () => {
  const [gameState, dispatch] = useGame();
  const { energy, pets, treasure } = gameState;

  const canPet = pets < 3;
  const canExplore = energy > 0;

  return html`
    <${Inn} />
    <progress className="energyBar" max="10" value=${energy}> ${energy * 10}% </progress>
    <button onClick=${() => dispatch({ type: 'day-passed' })}>Go to Sleep</button>
    <button disabled=${!canPet} onClick=${() => dispatch({ type: 'pet-dog' })}>${canPet ? 'Pet the Dog' : 'Too much Pet!'}</button>
    <${ExploreMenu} onExplore=${location => dispatch({ type: 'explore' })} disabled=${!canExplore} />
    <h2>Treasure:</h2>
    <ul>
      ${treasure.map(eachTreasure => html`<p>${eachTreasure}</p>`)}
    </ul>
  `;
};