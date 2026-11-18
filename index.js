const http = require("http");

const PORT = process.env.PORT || 3000;

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Web App</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      padding: 24px;
      font-family: Arial, sans-serif;
      color: #172033;
      background: linear-gradient(135deg, #e0f2fe, #eef2ff);
    }
    main {
      width: min(100%, 620px);
      padding: 42px 30px;
      text-align: center;
      background: white;
      border-radius: 18px;
      box-shadow: 0 16px 45px rgba(30, 64, 175, 0.12);
    }
    .tag {
      display: inline-block;
      padding: 7px 13px;
      color: #166534;
      background: #dcfce7;
      border-radius: 999px;
      font-size: 13px;
      font-weight: bold;
    }
    h1 { margin: 22px 0 12px; font-size: clamp(27px, 5vw, 38px); }
    p { color: #64748b; line-height: 1.7; }
    .technology {
      margin-top: 25px;
      padding: 14px;
      color: #1e40af;
      background: #eff6ff;
      border-radius: 10px;
      font-weight: bold;
    }
    footer { margin-top: 25px; color: #94a3b8; font-size: 13px; }
  </style>
</head>
<body>
  <main>
    <span class="tag">WEB APPLICATION</span>
    <h1>Hello, this is a basic web app!</h1>
    <p>Welcome to my first web application. This project demonstrates how to create a Node.js server and manage source code using Git and GitHub.</p>
  </main>
</body>
</html>`;

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    res.writeHead(204);
    return res.end();
  }

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(html);
});

server.listen(PORT, () => {
  console.log("Hello, this is a basic web app!");
  console.log(`Server running at http://localhost:${PORT}`);
});
