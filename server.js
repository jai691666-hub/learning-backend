const app = require("./src/app");
const db = require("./db");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 3000;

db.query("SELECT 1", (err, result) => {
  if (err) {
    console.log("DB connection failed", err);
  } else {
    console.log("DB connection successful");
  }
});

app.listen(port, host, () => {
  console.log(`Server listening on http://${host}:${port}`);
});
