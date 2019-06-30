// @flow
import { html, useState } from 'https://unpkg.com/preact-hook-htm@0.5.0-beta?module';

/*::
import type { Pet } from '../data/pet';

type Props = {
  freeRooms: number,
  passingPets: Array<Pet>,
  onRoomOffer: (pet: Pet) => void,
};
*/

export const FreeRooms = ({ freeRooms, passingPets, onRoomOffer }/*: Props*/) => {
  const [currentOfferingPet, setOfferingPet] = useState/*:: <null | Pet>*/(null);

  const onClickRoomOffer = (pet) => {
    alert(`${pet.name} says: "Ah! A bed to rest for tonight would be lovely. I accept!"`)
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
      >Offer</button> a room to <select
        onChange=${event => setOfferingPet(passingPets[event.target.value] || null)}
      >
        <option selected=${currentOfferingPet === null} value=${-1}>Nobody</option>
        ${passingPets.map((pet, petIndex) => html`<option
          value=${petIndex}
          selected=${currentOfferingPet && pet.id === currentOfferingPet.id}
        >${pet.name}</option>`)}
      </select>
    </p>
  `;
};