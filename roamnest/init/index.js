if (process.env.NODE_ENV !== "production") {
  const path = require('path');
  require("dotenv").config({ path: path.resolve(__dirname, '../.env') });
}

const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;

// Main connection function
async function main() {
  if (!dbUrl) {
    throw new Error("ATLASDB_URL is not defined in your .env file!");
  }
  await mongoose.connect(dbUrl);
}

// Function to seed the database
const initDB = async () => {
  try {
    // 1. Clear existing data
    await Listing.deleteMany({});
    
    // 2. Add owner to each listing (Use a real User ID from your Atlas 'users' collection)
    const processedData = initData.data.map((obj) => ({
      ...obj,
      owner: "69a420493c271ba6e1f03e92", // REPLACE THIS with a real ID from your Atlas DB
    }));

    // 3. Insert new data
    await Listing.insertMany(processedData);
    console.log(`✅ Database initialized with ${processedData.length} listings!`);

  } catch (err) {
    console.error("Initialization Error:", err);
  } finally {
    // 4. Always close the connection when finished
    mongoose.connection.close();
    console.log("Connection closed.");
  }
};

// EXECUTION LOGIC: Only run initDB AFTER main() succeeds
main()
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    initDB(); 
  })
  .catch((err) => {
    console.error("Could not connect to DB:", err);
  });