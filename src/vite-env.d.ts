/// <reference types="vite/client" />

declare module 'userService';

type review = {
    id:number,
    name:string,
    star:number,
    profileImg:string,
    review:string
};

interface RefObject<T> {
    // immutable
    readonly current: T | null
  }