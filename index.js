const http = require("http");

const server = http.createServer((req, res) => {
  // Home page
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <h1>Welcome to My Web Application</h1>
            <a href="/login">Login Here</a>
        `);
  }

  // Login page
  else if (req.url === "/login" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
            <h1>User Login</h1>
            <form action="/login" method="POST">
                <label>Username:</label>
                <input type="text" name="username" required>
                <br><br>

                <label>Password:</label>
                <input type="password" name="password" required>
                <br><br>

                <button type="submit">Login</button>
            </form>
        `);
  }

  // Handle login submission
  else if (req.url === "/login" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const data = new URLSearchParams(body);

      const username = data.get("username");
      const password = data.get("password");

      if (username === "admin" && password === "12345") {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });

        res.end("<h1>Login Successful!</h1><p>Welcome, Admin!</p>");
      } else {
        res.writeHead(401, {
          "Content-Type": "text/html",
        });

        res.end(
          '<h1>Login Failed!</h1><p>Invalid username or password.</p><a href="/login">Try Again</a>',
        );
      }
    });
  }

  // Handle unknown routes
  else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
