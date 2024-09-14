const express = require("express");
const fs = require('fs');
const cors = require("cors");
const app = express();
const client = require("./database");
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get("/classes", (request, response) => {
  client.query("SELECT * from Classes", (err, res) => {
    if (err) {
      console.error(err);
    } else {
      const data = res.rows;
      response.send(data);
    }
    // client.end(); // Close the connection after the query
  });
});

// const filePath = 'C:/Users/Tulasi Rao/Desktop/chapter 1.pdf';
// const fileName = 'chapter 1.pdf';
// app.get("/:interest", (request, response) => {
//   const { interest } = request.params;
//   client.query(
//     `select * from mentor where mentorareasofexpertise like '%${interest}%'`,
//     (err, res) => {
//       if (err) {
//         console.log(err);
//       } else {
//         const data = res.rows;
//         response.send(data);
//       }
//       // client.end();
//     }
//   );
// });

// app.post("/updatingData", async (request, response) => {
//   fs.readFile(filePath, (err, data) => {
//     if (err) throw err;
  
//     const query = `INSERT INTO chapters VALUES ("chapter 1",1,${data} )`;
//     client.query(query, (err, res) => {
//       if (err) {
//         console.error(err);
//       } else {
//         // console.log('PDF uploaded successfully');
//         response.send("PDF uploaded successfully");
//       }
//       client.end();
//     });
//   });
// });

app.listen(5000, () => {
  console.log(`Server Running at 5000`);
});

// UPDATE mentor
// SET
//     starttime = starttime + INTERVAL '60 minutes',
//     mentoravailability= CASE
//                     WHEN starttime > endtime THEN FALSE
//                     ELSE mentoravailability
//                   END
// WHERE mentorid = 1;
