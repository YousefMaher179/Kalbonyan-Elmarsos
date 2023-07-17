import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import "express-async-errors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSnitize from "express-mongo-sanitize";
import cookieParser from "cookie-parser";

//db
import connectDB from "./db/connect.js";

//routers
import authRouter from "./routes/authRoutes.js";
import notesRouter from "./routes/notesRoutes.js";

//middleware
import notFoundMiddleware from "./middlewares/not-found.js";
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import authenticateUser from "./middlewares/auth.js";

if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(express.json());
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(helmet());
app.use(xss());
app.use(mongoSnitize());
app.use(cookieParser());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/notes", authenticateUser, notesRouter);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is listening on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
