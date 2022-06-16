const path = require("path");
const express = require("express");
const app = express();
const publicPath = path.join(__dirname, "..", "build");
const port = process.env.PORT || 4000;

const spotifyRouter = require("./routes/spotify.js");

var cors = require("cors");
var cookieParser = require("cookie-parser");

app.use(express.static(publicPath));
app.use("/spotify", spotifyRouter);
app.use(cors());

app.get("/topTen", (req, res) => {
    // axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
    //     console.log("testing topTen");
    // });
    res.json({ message: "Top Ten" });
});
app.get("*", (req, res) => {
    res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
    console.log("Server is up on " + port);
});
