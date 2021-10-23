
import React from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import store from "./store/store";
import Router from "./router/router";

import "react-toastify/dist/ReactToastify.css";
import "./style.css";

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          className="toast"
        />
        <ToastContainer />
        <Router />
      </Provider>
    </>
  );
};

export default App;

