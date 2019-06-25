import { html, useState } from 'https://unpkg.com/preact-hook-htm?module';

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
        ${locations.map(location => html`<button key=${location} onClick=${() => onExplore(location)}>${location}</button>`)}
      </div>
    `;
  }
  return html`
    <button disabled>Im too tired... lets take a break!</button>
  `;
}