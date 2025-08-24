import React from "react";
import Header from "./header.js";
import "../fonts/Poppins-Regular.ttf";
import "./app.css";

const PORT = 5000;

function App() {
    const [backendData, setBackendData] = React.useState([{}]);

    React.useEffect(() => {
        fetch(`http://localhost:${PORT}/`).then(response => response.json()).then(data => {
            setBackendData(data);
        })
    }, []);

    return (
    <>
        <Header/>
    </>
    );
}

export default App;