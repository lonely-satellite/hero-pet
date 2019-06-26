import { html, useState } from 'https://unpkg.com/preact-hook-htm@0.3.1-beta?module';

const innNames = [
  'Tavern',
  'Drunkards Rest',
  'Loyal Knight',
  'Ladies Night'
];

export const getListRandomizer = (list) => () => (
  list[Math.floor(Math.random() * list.length)]
);

const getRandomInnName = getListRandomizer(innNames);

export const Inn = () => {
  const [name, setName] = useState(getRandomInnName())

  return html`
    <h1 class="innTitle">Welcome to the
      <input class="innTitleEditable"
        type="text"
        placeholder="Name your Inn!"
        onChange=${event => setName(event.target.value)}
        value=${name}
      />
    </>
  `
};