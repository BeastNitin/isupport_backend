require('dotenv').config({ path: `${__dirname}/.env` });

const express = require('express');
const cors = require('cors');
const session = require('express-session');
const flash = require('express-flash');
const db = require('./utilities/creds.js');
const bodyparser = require('body-parser');
const res = require('express/lib/response');
// const homeRoutes = require("./routes/home-routes");
// const signinRoutes = require("./routes/signin-routes");
// const facilityCrud = require("./cruds/facility-crud");
// const shippingCrud = require("./cruds/shipping-crud");
// const providerCrud = require("./cruds/provider-crud");
// const productCrud = require("./cruds/product-crud");
// const programCrud = require("./cruds/program-crud");
// const dbRoutes = require("./routes/dropdowns");

const app = express();
app.use(cors());
app.use(express.json());
//app.use(bodyparser())
// app.use(session({ secret: "mySecretKey", resave: true }));
// app.use(flash());
// app.use(express.urlencoded({ extended: false }));

// app.use(homeRoutes.routes);
// app.use(signinRoutes.routes);
// app.use("/facility", facilityCrud.routes);
// app.use("/provider", providerCrud.routes);
// app.use("/shipping", shippingCrud.routes);
// app.use("/product", productCrud.routes);
// app.use("/program", programCrud.routes);
// app.use(dbRoutes.routes);

// app.post('/post_case_intake',(req,res)=>{
//     let sql=`INSERT INTO case_intake (case_no,case_reporter_comments,case_narative) VALUES
//     (5,"hello","hey")`;
//     db.query(sql,
//      (err, result) => {
//        if (err) return res.status(500);
//        return res.json(result);
//       // res.end(JSON.stringify(req.body));
//      }
//    );
//    console.log(sql);
//  });

// app.get('/', (req, res) => {
//   let sql = `SELECT * FROM case_intake`;
//   db.query(sql, (err, result) => {
//     if (err) return res.status(500);
//     return res.json(result);
//   });
// });
app.get('/get_case_intake', (req, res) => {
  let sql = `SELECT * FROM case_intake`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500);
    return res.json(result);
  });
});

app.post('/post_case_intake', (req, res) => {
  let sql = `INSERT INTO case_intake (case_no,case_reporter_comments,case_narative) VALUES
   (15,"ram","kkh")`;
  db.query(sql, (err, result) => {
    if (err) return res.status(500);
    return res.json(result);
  });
  console.log(sql);
});

const port = 8000;
app.listen(port, () => console.info(`[Server] > Listening on port ${port}`));
