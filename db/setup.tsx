import * as SQLite from "expo-sqlite";

let dbInstance: SQLite.SQLiteDatabase | null = null;

async function createTableIfNotExist(db:SQLite.SQLiteDatabase) {

	try {
		await db.execAsync(`
      CREATE TABLE IF NOT EXISTS userData (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        age INTEGER,
		gender Varchar(50),
		height INTEGER,
      );
    `);

		console.log("Table created successfully!");
	} catch (error) {
		console.error("Error creating table:", error);
	}
}

export default async function setupDb(){
	if(!dbInstance){
		dbInstance = await SQLite.openDatabaseAsync("db.db");
		await createTableIfNotExist(dbInstance);
	}
	return dbInstance;
}

