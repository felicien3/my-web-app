const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`
        <h1>Welcome to Home Page</h1>
        <p>This is the home page of my web application.</p>
    `);
});

app.get("/about", (req, res) => {
  res.send(`
        <h1>About Us</h1>
        <p>This page provides information about our web application.</p>
        <p>We are learning Node.js, Git and GitHub.</p>
    `);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
