import { html } from 'https://unpkg.com/preact-hook-htm?module';

/*::
type Props = {
  name: string,
  adjective: string,
};
*/

export const HeroName = ({ name, adjective }/*: Props*/) => html`
  <p><em>${name}</em>, the <em>${adjective}</em></>
`;