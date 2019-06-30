// @flow
import { html, useState } from '../lib/react.js';

/*::
import type { Pet } from '../data/pet';
import type { Hero } from '../data/hero';

type Props = {
  freeRooms: number,
  passingPets: Array<Pet>,
  onRoomOffer: (pet: Pet) => void,
  heroes: Array<Hero>,
};
*/

export const FreeRooms = ({ freeRooms, passingPets, onRoomOffer, heroes }/*: Props*/) => {
  const [currentOfferingPet, setOfferingPet] = useState/*:: <null | Pet>*/(null);

  const onClickRoomOffer = (pet) => {
    alert(`${pet.name} says: "Ah! A bed to rest for tonight would be lovely. I accept!"`)
    setOfferingPet(null);
    onRoomOffer(pet);
  }

  if (freeRooms < 1 || passingPets.length < 1) {
    return null;
  }
  return html`
    <p>There are ${freeRooms} free rooms.</p>
    <p>
      <button
        disabled=${!currentOfferingPet}
        onClick=${() => currentOfferingPet && onClickRoomOffer(currentOfferingPet)}
      >Offer a room</button> to <select
        onChange=${event => setOfferingPet(passingPets.find(pet => pet.id === event.target.value) || null)}
      >
        <option selected=${currentOfferingPet === null} value=${-1}>Nobody</option>
        ${passingPets.filter(pet => !heroes.find(hero => hero.petId === pet.id)).map((pet) => html`<option
          value=${pet.id}
          selected=${currentOfferingPet && pet.id === currentOfferingPet.id}
        >${pet.name}</option>`)}
      </select>
    </p>
  `;
};