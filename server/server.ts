import http from "http";

const PORT = 5000;

const Server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/home" && req.method === "GET") {
        
    }
});

Server.listen(PORT, () => {
    console.log(`Server listening from PORT ${PORT}!`);
})