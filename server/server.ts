import http from "http";

const PORT = 5000;

const Server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/home" && req.method === "GET") {
        res.writeHead(200, {"Content-Type": "application/json"});
        res.end(JSON.stringify({
            message: "OK",
        }));
    }
});

Server.listen(PORT, () => {
    console.log(`Server listening from PORT ${PORT}!`);
})