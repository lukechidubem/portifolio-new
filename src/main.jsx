import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import "./index.css";

import authReducer from "./redux/slices/auth";
import { configureStore } from "@reduxjs/toolkit";
import { Provider as ReduxProvider } from "react-redux";
import { HelmetProvider } from "react-helmet-async";

import { BrowserRouter } from "react-router-dom";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";

const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ReduxProvider store={store}>
        <BrowserRouter basename="/">
          {/* <PersistGate loading={null} persistor={persistStore(store)}> */}
          <App />
          {/* </PersistGate> */}
        </BrowserRouter>
      </ReduxProvider>
    </HelmetProvider>
  </React.StrictMode>
);
