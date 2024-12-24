import { Router } from "express";
import { createOrder, getAllOrders } from "../controllers/order.controller.js";

const orderRouter = Router();

orderRouter.get("/", getAllOrders).post("/", createOrder);

export { orderRouter };
