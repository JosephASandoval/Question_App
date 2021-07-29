const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("This Works"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is up on port ${port}`));