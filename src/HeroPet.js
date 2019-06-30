// @flow
import { html, useReducer, useState } from './lib/react.js';
import { Inn } from './components/Inn.js';
import { HeroName } from './components/HeroName.js';
import { PassingPetsDescription } from './components/PassingPetsDescription.js';
import { ExploreMenu } from './components/ExploreMenu.js';
import { EndOfDayReview } from './components/EndOfDayReview.js';
import { FreeRooms } from './components/FreeRooms.js';
import { Heroes } from './components/Heroes.js';

import { gameReducer, DEFAULT_GAME_STATE } from './reducers.js';
import { passDay, changeInnName, offerRoom } from './actions.js';

export const HeroPet = () => {
  const [{ heroState, innState }, dispatch] = useReducer(gameReducer, DEFAULT_GAME_STATE);
  const [reviewClosed, setReviewClosed] = useState(true);
  const { heroes, passingPets  } = heroState;
  const { days, innName, openRooms } = innState;

  const onEndDay = () => {
    setReviewClosed(false);
    dispatch(passDay());
  };

  if (!reviewClosed) {
    return html`
      <${EndOfDayReview}
        day=${days}
        innName=${innName}
        onCloseReview=${() => setReviewClosed(true)}
      />`;
  }

  return html`
    <${Inn} innName=${innName} onInnNameChange=${newName => dispatch(changeInnName(newName))} />
    <${PassingPetsDescription} passingPets=${passingPets} />
    <${FreeRooms} freeRooms=${openRooms} passingPets=${passingPets} onRoomOffer=${pet => dispatch(offerRoom(pet))} />
    <${Heroes} heroes=${heroes} />
    <button onClick=${onEndDay}>Close the ${innName} for Tonight</button>
  `;
};