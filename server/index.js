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

// h_business
// read
app.get("/business", async (req, res) => {
  const tb = await sql`
  select * from h_business
  `;
  res.json(tb);
});

// create
app.post("/business", async (req, res) => {
  const { companyid, businessname, address, email, phonenumber, createddate } =
    req.body;

  const create_business = await sql`
  insert into h_business(companyid, businessname, address, email, phonenumber, createddate)
  values (${companyid}, ${businessname}, ${address}, ${email}, ${phonenumber}, ${createddate})
  returning *
  `;
  res.json(create_business);
});

// update
app.put("/business/:id", async (req, res) => {
  const { id } = req.params;
  const { companyid, businessname, address, email, phonenumber, createddate } =
    req.body;
  const update = await sql`
  update h_business set 
  companyid=${companyid},
  businessname=${businessname},
  address=${address}, 
  email=${email}, 
  phonenumber=${phonenumber}, 
  createddate=${createddate}
  where id=${id}
  returning *`;
  res.json(update[0]);
});

// delete
app.delete("/business/:id", async (req, res) => {
  const { id } = req.params;
  const deleteQuery = await sql`
  delete from h_business where id = ${id}
  `;
  res.json({
    status: "item deleted",
  });
});

app.listen(5000, () => {
  console.log("server has started");
});
