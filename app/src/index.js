const express = require("express");
const app = express();

const { Pool } = require("pg");
const pool = new Pool({
  user: "dbuser",
  host: "my-postgres",
  database: "mydb",
  password: "secretpassword",
  port: 5432,
});

app.use(express.json());

app.get("/cars", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars");
    res.json(result.rows);
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/cars/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await pool.query("SELECT * FROM cars WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).json({ error: "Not Found" });
    } else {
      res.json(result.rows[0]);
    }
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/average_year", async (req, res) => {
  try {
    const result = await pool.query("SELECT AVG(year) FROM cars");
    res.json({ average: result.rows[0].avg });
  } catch (err) {
    console.error("Error executing query", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
