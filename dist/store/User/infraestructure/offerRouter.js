"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offerRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.offerRouter = express_1.default.Router();
// Ruta para registrar una nueva oferta
exports.offerRouter.post("/create-offer", dependencies_1.registerOfferController.register.bind(dependencies_1.registerOfferController));
// Ruta para obtener una oferta por su ID
exports.offerRouter.get("/:id", dependencies_1.getOfferController.getByPublic.bind(dependencies_1.getOfferController));
// Ruta para eliminar una oferta por su ID
exports.offerRouter.delete("/delete/:id", dependencies_1.deleteOfferController.delete.bind(dependencies_1.deleteOfferController));
// Ruta para obtener todas las ofertas
// offerRouter.get("/all-users", getOffersController.getOffers.bind(getOffersController));
