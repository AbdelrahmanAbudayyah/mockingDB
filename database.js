const mysql=require("mysql2/promise");
const dbConfig = require("./dbConfig");

 const pool=mysql.createPool(dbConfig);

async function getUser(userId) {
    const[rows]=await pool.execute("SELECT * FROM player WHERE id = ?", [userId]);
    if (rows.length === 0) {
        throw new Error("User not found");
      }
      return rows[0];
}



module.exports={getUser,pool};
