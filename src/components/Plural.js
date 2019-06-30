// @flow
import { html } from 'https://unpkg.com/preact-hook-htm@0.5.0-beta?module';

/*::
import type { vNode } from 'preact-hook-htm';

type Props<T> = {
  elements: Array<T>,
  renderJoiner: () => vNode,
  renderFinalJoiner: () => vNode,
  renderElement: T => vNode,
};
*/

export const Plural = /*:: <T>*/({ elements, renderElement, renderJoiner, renderFinalJoiner }/*: Props<T>*/)/*:vNode*/ => {
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
