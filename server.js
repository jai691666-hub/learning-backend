const app = require("./src/app");
const db = require("./db");

db.query("SELECT 1", (err, result) => {
  if (err) {
    console.log("DB connection failed", err);
  } else {
    console.log("DB connection successful");
  }
});

app.listen(3000, "192.168.31.106", () => {
  console.log("Server listening on http://192.168.31.106:3000");
});
