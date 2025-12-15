require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test API (no DB yet)
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Keyboard", quantity: 10 },
    { id: 2, name: "Mouse", quantity: 5 }
  ]);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});

