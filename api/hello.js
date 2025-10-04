export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow frontend
  res.status(200).json({ message: "Hello from Vercel Backend 🚀" });
}
