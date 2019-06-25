
export const getListRandomizer = (list) => () => (
  list[Math.floor(Math.random() * list.length)]
);