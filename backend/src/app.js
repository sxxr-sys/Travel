"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const database_1 = __importDefault(require("./database/database"));
const user_route_1 = __importDefault(require("./routes/user.route"));
dotenv_1.default.config();
(0, database_1.default)();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/user", user_route_1.default);
exports.default = app;
