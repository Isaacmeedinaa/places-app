import React from "react";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import placesReducer from "./store/places-reducer";
import { init } from "./helpers/db";

import PlacesNavigator from "./navigation/PlacesNavigator";

init()
  .then(() => {
    console.log("initialized db");
  })
  .catch((err) => {
    console.log("initialized db (FAILED)");
    console.log(err);
  });

const rootReducer = combineReducers({
  places: placesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <PlacesNavigator />
    </Provider>
  );
}
