"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.offerRouter = void 0;
const registerOfferController_1 = require("./controllers/registerOfferController");
const registerOfferUseCase_1 = require("../appliaction/registerOfferUseCase");
const mysqlOfferRepository_1 = require("./mysqlOfferRepository");
const express_1 = __importDefault(require("express"));
const getOfferController_1 = require("./controllers/getOfferController");
const getOfferUseCase_1 = require("../appliaction/getOfferUseCase");
const offerRepository = new mysqlOfferRepository_1.MysqlOfferRepository();
const getOfferUseCase = new getOfferUseCase_1.GetOfferUseCase(offerRepository);
const getOfferController = new getOfferController_1.GetofferController(getOfferUseCase);
exports.offerRouter = express_1.default.Router();
const registerOfferUseCase = new registerOfferUseCase_1.RegisterOfferUseCase(offerRepository);
const registerOfferController = new registerOfferController_1.RegisterOfferController(registerOfferUseCase);
// Ruta para registrar una nueva oferta
exports.offerRouter.post("/create-offer", registerOfferController.register.bind(registerOfferController));
exports.offerRouter.get("/:id", getOfferController.getByPublic.bind(getOfferController));
