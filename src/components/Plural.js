// @flow
import { html } from '../lib/react.js';

/*::
import type { PreactElement } from 'preact-hook-htm';

type Props<T> = {
  elements: Array<T>,
  renderJoiner: () => PreactElement,
  renderFinalJoiner: () => PreactElement,
  renderElement: T => PreactElement,
};
*/

export const Plural = /*:: <T>*/({ elements, renderElement, renderJoiner, renderFinalJoiner }/*: Props<T>*/)/*:PreactElement*/ => {
  if (elements.length < 2) {
    return renderElement(elements[0]);
  }
  const allButLast = elements.slice(0, elements.length - 1);
  const last = elements[elements.length - 1];

  return elements.map((element, index) => {
    if (index === 0) {
      return html`${renderElement(element)}`;
    }
    if (index === elements.length - 1) {
      return html`${[renderFinalJoiner(), renderElement(element)]}`;
    }
    return html`${[renderJoiner(), renderElement(element)]}`;
  });
};
