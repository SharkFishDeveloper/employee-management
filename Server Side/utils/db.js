import pg from 'pg';

const { Client } = pg;

// const con = mysql.createConnection({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "employeems"
// })
const connectionString = "postgresql://shahzebakhtar66:z7v6bFPRiafu@ep-morning-violet-a5txgtbx.us-east-2.aws.neon.tech/prisma_migrate_shadow_db_13c76688-1fee-4e73-8528-e144b56639fd?sslmode=require";

const con = new Client({
    connectionString: connectionString,
    ssl: {
      rejectUnauthorized: false // Necessary if you're using self-signed SSL certificates
    }
  });
  con.connect(function(err) {
    if(err) {
        console.log("connection error")
    } else {
        console.log("Connected")
    }
})

export default {con};

