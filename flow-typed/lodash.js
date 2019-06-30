// @flow strict

declare module 'https://unpkg.com/lodash-es@3.10.1/utility/times.js' {
  declare function times<T>(count: number, generator: () => T): Array<T>;
  declare export default typeof times;
}