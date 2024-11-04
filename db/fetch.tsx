import setupDb from "./setup";

async function fetchAllUserData(){
    const db = await setupDb();

    try {
        const results = await db.getAllAsync("SELECT * FROM userData");
        return results
    }
    catch (error) {
        console.error("Error fetching data:", error);
    } 
}

export default fetchAllUserData;