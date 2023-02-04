import express from "express";
import morgan from "morgan";

// Import routes
import productsRoutes from "./routes/products.routes.js";
import auth from "./routes/Auth.routes.js";
import cors from "cors";
const app = express();


app.use( 
    cors({
      origin: "*",
      methods: ["GET", "PUT", "POST", "DELETE"],
    })
  );
// middleware 
app.use(morgan("dev"));
app.use(express.json());

// routes
app.use("/api/products", productsRoutes);
app.use("/api/user", auth);

export default app;
