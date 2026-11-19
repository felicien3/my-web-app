const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my DevOps Web Application!");
  } else if (req.url === "/about") {
    res.end("About Page - Developed by Niyonsenga Felicien");
  } else {
    res.writeHead(404);
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
