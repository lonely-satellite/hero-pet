import { html } from 'https://unpkg.com/preact-hook-htm@0.3.1-beta?module';

export const HeroName = ({ name, adjective }/*: Props*/) => html`
  <p><em>${name}</em>, the <em>${adjective}</em></>
`;