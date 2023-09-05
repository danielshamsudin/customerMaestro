const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("./db");

app.use(cors());
app.use(express.json());

//crud routes

// h_agent
// read
app.get("/agents", async (req, res) => {
  const tb = await sql`
  select * from h_agent
  `;
  res.json(tb);
});

// create
app.post("/agents", async (req, res) => {
  const { business, image, position, rating, email, phonenumber, name } =
    req.body;

  const insert_agent = await sql`
  insert into h_agent(business, image, position, rating, email, phonenumber, name)
  values (${business}, ${image}, ${position}, ${rating}, ${email}, ${phonenumber}, ${name})
  returning *
  `;
  res.json(insert_agent);
});

// update
app.put("/agents/:id", async (req, res) => {
  const { id } = req.params;
  const { business, image, position, rating, email, phonenumber, name } =
    req.body;
  const update = await sql`
  update h_agent set business=${business},
  image=${image},
  position=${position},
  rating=${rating},
  email=${email},
  phonenumber=${phonenumber},
  name=${name}
  where id = ${id}  
  returning *`;
  res.json(update[0]);
});

// delete
app.delete("/agents/:id", async (req, res) => {
  const { id } = req.params;
  const deleteQuery = await sql`
  delete from h_agent where id = ${id}
  `;
  res.json({
    status: "item deleted",
  });
});

app.listen(5000, () => {
  console.log("server has started");
});
