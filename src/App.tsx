import React from 'react';
import './main.global.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {rootReducer} from "./store/reducer";
import {Layout} from "./shared/Layout";
import {Content} from "./shared/Content";

const store = createStore(rootReducer, composeWithDevTools());

export function AppComponent() {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export const App = () =>
  <Provider store={store}>
    <AppComponent />
  </Provider>
;
