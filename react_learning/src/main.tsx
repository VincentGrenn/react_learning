import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app.js";
import "./fonts/Poppins-Regular.ttf";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);