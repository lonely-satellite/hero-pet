// @flow
import "https://wzrd.in/standalone/uuid%2Fv4@latest";

export const getListRandomizer = (list) => () => (
  list[Math.floor(Math.random() * list.length)]
);

export const generateUUID = window.uuidv4;