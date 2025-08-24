import React from "react";
import Header from "./header.js";

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