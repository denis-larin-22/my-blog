import { IAction, IErrorAction, IPayloadAction } from "./types";

export function createAction(type: string): IAction {
    const actionCreator = () => ({ type });
    actionCreator.TYPE = type;

    return actionCreator;
}

export function createPayloadAction(type: string): IPayloadAction {
    const actionCreator: IPayloadAction = (payload: any) => ({ type, payload });
    actionCreator.TYPE = type;

    return actionCreator;
}

export function createErrorAction(type: string): IErrorAction {
    const actionCreator: IErrorAction = (error) => ({ type, error });
    actionCreator.TYPE = type;

    return actionCreator;
}