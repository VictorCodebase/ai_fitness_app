import * as SQLite from "expo-sqlite";

async function createTableIfNotExist() {
	const db = await SQLite.openDatabaseAsync("db.db");

	try {
		await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
      );
    `);

		console.log("Table created successfully!");
	} catch (error) {
		console.error("Error creating table:", error);
	}
}

