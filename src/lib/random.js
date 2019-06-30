// @flow
import generateUUID from 'https://cdn.pika.dev/v4-uuid/v1';

export const getListRandomizer = /*:: <T>*/(list/*: Array<T>*/)/*: () => T*/ => () => (
  list[Math.floor(Math.random() * list.length)]
);

export {
  generateUUID
};