/// <reference types="vite/client" />

declare module 'userService';

type review = {
    id:number,
    name:string,
    star:number,
    profileImg:string,
    review:string
};

type service = {
  serviceName:string ,
  serviceImg:string,
  serviceDescription:string
};

interface RefObject<T> {
    // immutable
    readonly current: T | null
  }
  interface HomePageProps {
    isOrderModalOpen: boolean;
    closeModalOrder: () => void;
  }
  
interface OpenModalProps {
    OpenModalOrder: () => void; //  the emitted function
  }
interface closeModalOrder {
  closeModalOrder: () => void; //  the emitted function
  }
interface closeVideo {
  closeVideo: () => void; //  the emitted function
  }

  interface EmailFormEvent extends React.FormEvent<HTMLFormElement> {
    preventDefault: () => void;
    target: HTMLFormElement;
    }
  interface ChooseImg extends React.MouseEvent<HTMLImageElement> {
    target: HTMLFormElement;
    }