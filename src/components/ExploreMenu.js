import { html, useState } from '../lib/react.js';
import { generateTreasure } from '../data/treasure.js';

const locations = [
  'beach',
  'forest',
  'cave',
  'dog park'
];

export const ExploreMenu = ({ onExplore, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onExploreButtonClick = () => {
    setIsOpen(!isOpen)
  }

  const onLocationClick = (location) => () => {
    // treasure finding chance
    if (Math.random() < 0.5) {
      onExplore(location, generateTreasure());
    }

    onExplore(location);
  };

  if (!isOpen && !disabled) {
    return html`
      <div>
        <button onClick=${onExploreButtonClick}>Lets Explore!</button>
      </div>
    `;
  }
  if (isOpen && !disabled) {
    return html`
      <div>
        <button onClick=${onExploreButtonClick}>Lets Explore!</button>
        ${locations.map(location => html`<button key=${location} onClick=${onLocationClick(location)}>${location}</button>`)}
      </div>
    `;
  }
  return html`
    <button disabled>Im too tired... lets take a break!</button>
  `;
}