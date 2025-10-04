import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Backend 🚀" });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running at http://localhost:${PORT}`));
