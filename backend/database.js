const { Client } = require("pg");

// Create a client instance
const client = new Client({
  host: "ep-rough-shape-a1ljq80m-pooler.ap-southeast-1.aws.neon.tech",
  port: 5432,
  user: "default",
  password: "ByYdbQlG45sX",
  database: "verceldb",
  ssl: {
    rejectUnauthorized: false, // Set this to true for stricter SSL verification
  },
});

// Connect to the PostgreSQL database
client
  .connect()
  .then(() => console.log("Connected to PostgreSQL database"))
  .catch((err) => console.error("Connection error", err.stack));

module.exports = client;
