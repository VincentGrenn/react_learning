import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app.js";

if (typeof(document) !== null) {    
    ReactDOM.createRoot(document.getElementById("root")).render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}