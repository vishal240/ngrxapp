import { createReducer, on } from '@ngrx/store';
import { addvalue, decreament, increament, loaddata, reset } from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(initialState, on(increament, (state) => {
  return {
    ...state,
    counter: state.counter + 1
  }
}), on(decreament, (state) => {
  if(state.counter!=0){
    return {
      ...state,
      counter: state.counter - 1
    }
  } else {
    return {
      ...state,
      counter: 0
    }
  }

}), on(reset, (state) => {
  return {
    ...state,
    counter: 0
  }
}), on(addvalue, (state, actions) => {
  return {
    ...state,
    counter: state.counter + actions.addvalue
  }
})
);

export const counterReducerLoad = createReducer(
  initialState,
  on(loaddata, (state, actions) => {
    return {
      ...state,
      products: actions.products
    }
  })
);
