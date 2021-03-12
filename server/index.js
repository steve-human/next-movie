const next = require("next");
const express = require("express");
const fs = require("fs");
const path = require("path");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const filePath = "./data.json";
const movieData = require(filePath);

app.prepare().then(() => {
  const app = express();
  app.use(express.json());

  app.get("/api/v1/movies", (req, res) => {
    res.json(movieData);
  });

  app.post("/api/v1/movies", (req, res) => {
    const movie = req.body;
    const id = Math.random().toString(36).substr(2, 5);
    movieData.push({ ...movie, id });
    const pathToFile = path.join(__dirname, filePath);
    const dataStr = JSON.stringify(movieData, null, 2);
    fs.writeFileSync(pathToFile, dataStr);

    return res.send(movieData);
  });

  app.get("/api/v1/movies/:id", (req, res) => {
    const { id } = req.params;
    const movie = movieData.find((movie) => movie.id === id);
    res.json(movie);
  });

  app.delete("/api/v1/movies/:id", (req, res) => {
    const movie = req.body;
    return res.send({ ...movie });
  });

  app.get("*", (req, res) => {
    // next.js is handling requests and providing pages where we are navigating to
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log("> Ready on port " + PORT);
  });
});
