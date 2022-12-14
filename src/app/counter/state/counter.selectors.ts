import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CountInterface, ProductInterface } from "./counter.state";

const getCounterState = createFeatureSelector<CountInterface>('counter');
const getProductsState = createFeatureSelector<ProductInterface>('loaddata');

export const getCounter = createSelector(getCounterState, state => {
  return state.counter;
})

export const getProducts = createSelector(getProductsState, state => {
  return state.products;
})
