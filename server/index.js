const express = require("express");
const cors = require("cors");

const usersRoute = require("./routes/users");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
