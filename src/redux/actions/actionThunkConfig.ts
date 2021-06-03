import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { StoreType } from "../combine";

export type ActionType =  ThunkAction <void, StoreType, null ,Action<string> >