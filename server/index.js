const express = require("express");
const app = express();
const cors = require("cors");
const sql = require("./db");
const { auth, requiresAuth } = require("express-openid-connect");
require("dotenv").config();

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTH0_SECRET,
  baseURL: "http://localhost:3000",
  clientID: "vVh7xg469baCOXXaAXaRX0sW5gqAMhKN",
  issuerBaseURL: "https://dev-ec4i4trwsdu165uk.us.auth0.com",
};

app.use(cors());
app.use(express.json());
app.use(auth(config));

app.get("/login", async (req, res) => {});

//crud routes
function generateCRUDRoutes(app, tableName, columns) {
  const tbn = tableName.substring(2);
  // Read
  app.get(`/${tbn}`, async (req, res) => {
    const tb = await sql`
      select * from ${sql(tableName)}
    `;
    res.json(tb);
  });

  // Create
  app.post(`/${tbn}`, async (req, res) => {
    const insertData = {};
    columns.forEach((column) => {
      insertData[column] = req.body[column];
    });
    console.log(insertData);
    console.log(columns);
    const insertQuery = await sql`
      insert into ${sql(tableName)} ${sql(insertData, ...columns)}
      returning *
    `;
    res.json(insertQuery);
  });

  // Update
  app.put(`/${tbn}/:id`, async (req, res) => {
    const { id } = req.params;
    const updateData = {};
    columns.forEach((column) => {
      updateData[column] = req.body[column];
    });
    console.log(updateData);
    console.log(columns);

    const updateQuery = await sql`
      update ${sql(tableName)} set ${sql(updateData, ...columns)}
      where id = ${id}
      returning *
    `;
    res.json(updateQuery[0]);
  });

  // Delete
  app.delete(`/${tbn}/:id`, async (req, res) => {
    const { id } = req.params;
    const deleteQuery = await sql`
      delete from ${sql(tableName)} where id = ${id}
    `;
    res.json({
      status: "item deleted",
    });
  });
}

generateCRUDRoutes(app, "h_agent", [
  "business",
  "image",
  "position",
  "rating",
  "email",
  "phonenumber",
  "name",
  "password",
]);

generateCRUDRoutes(app, "h_business", [
  "companyid",
  "businessname",
  "address",
  "email",
  "phonenumber",
  "createddate",
]);

generateCRUDRoutes(app, "h_customer", [
  "Name",
  "Gender",
  "Agent",
  "Email",
  "PhoneNumber",
  "Address",
  "ShippingAddress",
  "Recurring",
  "CreatedDate",
  "IC",
  "Preference",
]);

generateCRUDRoutes(app, "h_product", [
  "Name",
  "Price",
  "Description",
  "Stock",
  "Agent",
  "Business",
  "Type",
  "SKU",
  "Image",
]);

generateCRUDRoutes(app, "l_Agent_Customer", [
  "agentid",
  "customerid",
  "createdDate",
]);

generateCRUDRoutes(app, "l_agent_product", [
  "agentid",
  "productid",
  "createdDate",
]);

generateCRUDRoutes(app, "l_customer_product", [
  "Customer",
  "Product",
  "CreatedDate",
]);

generateCRUDRoutes(app, "s_lead", [
  "Agent",
  "ProductInterest",
  "Customer",
  "Contact",
  "Followup",
  "EngagementChannel",
  "CreatedDate",
]);

generateCRUDRoutes(app, "s_sales", [
  "Agent",
  "Customer",
  "DeliveryCost",
  "TotalPrice",
  "Products",
  "CreatedDate",
]);

generateCRUDRoutes(app, "s_task", [
  "agent_id",
  "category",
  "timetocomplete",
  "createddate",
  "title",
  "description",
  "status",
]);

app.listen(5000, () => {
  console.log("server has started");
});
