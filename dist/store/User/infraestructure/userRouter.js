"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies"); // Asegúrate de tener el controlador RegisterUserController importado desde tus dependencias
exports.userRouter = express_1.default.Router();
// Ruta para obtener un usuario por su ID
exports.userRouter.get("/:id", dependencies_1.getUserController.getByPublic.bind(dependencies_1.getUserController));
// Ruta para registrar un nuevo usuario
exports.userRouter.post("/create-user", dependencies_1.registerUserController.register.bind(dependencies_1.registerUserController));
