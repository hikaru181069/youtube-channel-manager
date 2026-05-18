const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const channelRoutes = require("./routes/channelRoutes");
require("dotenv").config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/channels", channelRoutes);

app.get("/", (req, res) => {
  res.json({ message: "YouTube channel manager API is running" });
});

const PORT = process.env.PORT || 5003;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
