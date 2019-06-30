// @flow strict

declare module 'https://cdn.pika.dev/v4-uuid/v1' {
  declare function generateUUID(): string;
  declare export default typeof generateUUID;
}