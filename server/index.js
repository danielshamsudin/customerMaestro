const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("./db");

app.use(cors());
app.use(express.json());

//crud routes

// create
app.post("/todos", async (req, res) => {
  const { description } = req.body;
  const insert = await sql`
  insert into todo(description) values(${description}) returning *`;
  res.json(insert[0]);
});

// read
app.get("/todos", async (req, res) => {
  const tb = await sql`
  select * from todo
  `;
  res.json(tb);
});

// update
app.put("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  const update = await sql`
  update todo set description = ${description} where todo_id = ${id}
  returning *`;
  res.json(update[0]);
});

// delete
app.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;
  const deleteQuery = await sql`
  delete from todo where todo_id = ${id}
  `;
  res.json({
    status: "item deleted",
  });
});

app.listen(5000, () => {
  console.log("server has started");
});
