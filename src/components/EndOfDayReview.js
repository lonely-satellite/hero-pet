// @flow
import { html } from '../lib/react.js';

/*::
type Props = {
  day: number,
  innName: string,
  onCloseReview: () => void,
}
*/

export const EndOfDayReview = ({ day, innName, onCloseReview }/*: Props*/) => {
  return html`
    <form>
      <p>It is day ${day} since you opened the ${innName}</p>
      <button onClick=${onCloseReview}>Start the next day!</>
    </form>`;
};