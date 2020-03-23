import React from "react";
import { initialState, reducer } from "./state/reducer";
import { Provider } from "./state/useGlobalState";
import { Home } from "../src/pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Provider reducer={reducer} initialState={initialState}>
        <Home />
      </Provider>
    </div>
  );
}

export default App;
