const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3000;
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.use(express.static(publicDirectoryPath));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
