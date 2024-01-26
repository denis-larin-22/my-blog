//  CREATE REDUCER ACTIONS FUNCTION TYPES/INTARFACES
export interface IAction {
    (): {
        type: string;
    }
    TYPE: string;
}

export interface IPayloadAction {
    (payload: any): {
        type: string;
        payload: any;
    };
    TYPE: string;
}

export interface ErrorObj {
    type: string;
    error: any;
}

export interface IErrorAction {
    (error: any): ErrorObj;
    TYPE: string;
}

// CREATE FRAMER ANIMATION FUNCTION TYPES/INTARFACES
export interface IAnimationValues {
    y?: number | string,
    x?: number | string,
    opacity?: number,
    scale?: number,
    duration?: number,
    delay?: number
}

export interface IInitialObject {
    y: string | number;
    x: string | number;
    opacity: number;
    scale: number;
}

export interface IAnimateObject {
    y: number;
    x: number;
    opacity: number;
    scale: number;
}

export interface ITransitionObject {
    duration: number;
    delay: number;
}

export type AnimationObjectsArray = [IInitialObject, IAnimateObject, ITransitionObject];