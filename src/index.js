import React from "react";
import "./index.scss";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import productReducer, { productsFetch } from "./features/productSlice";
import { productsApi } from "./features/productApi";
import cartReducer from "./features/cartsSlice";

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});

store.dispatch(productsFetch());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
