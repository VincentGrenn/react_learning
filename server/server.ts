import http from "http";
import fs from "fs";
import url from "url";
import path from "path";
import mimetypes from "mime-types";

const PORT = 5000;

function ServeStaticFile(req: http.IncomingMessage, res: http.ServerResponse) {
    const ParsedURL = url.parse(req.url, true);
    let FileName = ParsedURL.path.replace(/^\/+|\/+$/g, "");

    if (FileName === "") FileName = "index.html";

    const FilePath = import.meta.dirname.replace("/server", "") + "/client/src/" + FileName;

    fs.readFile(FilePath, (err, data) => {
        if (err) {
            res.writeHead(404, {"Content-Type": "application/json"});
            res.end(JSON.stringify({
                message: `Unable to locate file "${FileName}"!`
            }));
            return;
        }
        res.setHeader("X-Content-Type-Options", "nosniff");
        const Mime = mimetypes.lookup(FileName) as string;
        res.writeHead(200, {"Content-Type": Mime});
        res.end(data);
    })
}

const Server = http.createServer((req, res) => {
    if (req.url === "/" || req.url === "/home" && req.method === "GET") {
        ServeStaticFile(req, res);
    }
});

Server.listen(PORT, () => {
    console.log(`Server listening from PORT ${PORT}!`);
})