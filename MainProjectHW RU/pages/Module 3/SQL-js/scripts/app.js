const mysql = require('mysql2/promise');

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      database: "hw1",
      password: ""
    });
    console.log("DB connected");

    const selectQuery = 'SELECT * FROM user WHERE id IN (3, 7)';
    const [selectRows] = await connection.execute(selectQuery);
    console.log('Select rows 3 and 7:', selectRows);

    const updateQuery = 'UPDATE user SET name = "Alexander", age = 30 WHERE id IN (2, 6)';
    await connection.execute(updateQuery);
    console.log('Rows 2 and 6 got updated');

    const deleteQuery = 'DELETE FROM user WHERE id = 8';
    await connection.execute(deleteQuery);
    console.log('Row 8 got deleted');

    const selectAllQuery = 'SELECT * FROM user';
    const [allRows] = await connection.execute(selectAllQuery);
    console.log('Select all rows:', allRows);

    await connection.end();
  } catch (err) {
    console.error(err);
  }
}

connectToDatabase();