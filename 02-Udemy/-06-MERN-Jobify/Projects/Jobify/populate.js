import { readFile } from "fs/promises";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";
import Job from "./models/Job.js";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    const jsonProducts = JSON.parse(
      await readFile(new URL("./MOCK_DATA.json", import.meta.url))
    );
    await Job.create(jsonProducts);
    console.log("success");
    process.exit(0);
  } catch (err) {
    console.log("failed");
    process.exit(1);
  }
};

start();
