import { createAction, props } from "@ngrx/store";

export const increament = createAction('increament');
export const decreament = createAction('decreament');
export const reset = createAction('reset');

export const loaddata = createAction('loaddata', props<{ products: [] }>())

export const addvalue = createAction('addvalue', props<{ addvalue: number }>())
