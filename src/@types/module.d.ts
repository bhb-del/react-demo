declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.less' {
  const classes: { [key: string]: string };
  export default classes;
}