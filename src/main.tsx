import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
import App from "./App.tsx";
import "./index.css";
import { logger } from "./middlewares/index.ts";
import { rootReducer } from "./store/reducers/rootReducer.ts";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const composedEnhancers = compose(
  applyMiddleware(thunk, logger),
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, composedEnhancers);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
