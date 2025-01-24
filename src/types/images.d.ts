declare module '*.png';
declare module '*.svg';
declare module '*.jpeg';
declare module '*.jpg';

type TFileType = {
  uri: string;
  name: string;
  type: string;
  size: number;
};
