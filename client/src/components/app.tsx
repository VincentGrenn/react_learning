import React from "react";
import Header from "./header.js";

const PORT = 5000;

async function App() {
    const [message, setMessage] = React.useState({});

    async function SendApp() {
        try {
            const Response = await fetch(`localhost:${PORT}`);
            if (!Response.ok) throw new Error(`Server Error: ${Response.status}`);
            const Data = await Response.json();
            setMessage(Data);
        } catch(err) {
            throw new Error(err);
        }
    }

    return (
    <>
        <Header/>
    </>
    );
}

export default App;