import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Memory from "./App";

import { Provider } from 'react-redux';
import store from './Store/configureStore';

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Memory />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
