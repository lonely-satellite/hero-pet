// @flow
import { html } from '../lib/react.js';

import { Plural } from './Plural.js';

/*::
import type { PreactElement } from 'preact-hook-htm';
import type { Pet } from '../data/pet';

type Props = {
  passingPets: Array<Pet>,
  onPassingPetPress: (selectedPet: Pet) => void,
};
*/

const PluralPets = ({ pets, onClick }) => html`<${Plural}
  elements=${pets}
  renderElement=${pet => html`<button onClick=${() => onClick(pet)}>${pet.name}</button>`}
  renderJoiner=${() => html`<span>, </span>`}
  renderFinalJoiner=${() => html`<span> and </span>`}
/>`;

export const PassingPetsDescription = ({ passingPets, onPassingPetPress }/*: Props*/)/*: PreactElement*/ => {
  const renderPassingPet = (pet) => html`
    <button
      onClick=${() => onPassingPetPress(pet)}
    > ${pet.name} </>
  `;

  if (passingPets.length < 1) {
    return html`<p>Nobody new is in tonight.</p>`;
  } else if (passingPets.length < 2) {
    return html`<p>A wanderer they call ${renderPassingPet(passingPets[0])} is just passing throught tonight</p>`;
  } else {
    const allPets = html`<${PluralPets} pets=${passingPets} onClick=${onPassingPetPress} />`;
    return html`
      <p>Wanderers ${allPets} are passing through tonight.</p>
    `;
  }
}