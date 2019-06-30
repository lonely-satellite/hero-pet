import { html } from '../lib/react.js';

export const HeroName = ({ name, adjective }/*: Props*/) => html`
  <p><em>${name}</em>, the <em>${adjective}</em></>
`;