// import { createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  //we prepare a slice of our global state
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    //map of all the reducers this state's slice needs
    increment(state) {
      state.counter++;
      //here a new state will be created even if it doesn't look like it because of an internal package from redux toolkit
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      // state.counter = state.counter + action.amount;
      state.counter = state.counter + action.payload;
      //payload is the name of the property we will need to access any action we need
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },

  }
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter
//     };
//   };

//   //The object we return will over-write the existing state
//   //that's why we have to return the whole object
//   //We should always return a brand new object

//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.amount,
//       showCounter: state.showCounter
//     };
//   };

//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter
//     };
//   };

//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter
//     }
//   }

//   return state;
// };

const initialAuthState = {
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer}
  //the value can be a single reducer or multiple state slices
});

export const counterActions = counterSlice.actions;
//returns an action object of this shape:
//{type: 'some auto-generated unique identifier'}
//action creators

export const authActions = authSlice.actions;

export default store;
