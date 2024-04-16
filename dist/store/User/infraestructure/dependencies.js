"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOfferController = exports.getOfferController = exports.registerOfferController = exports.getUserController = void 0;
const mysqlUserRepository_1 = require("./mysqlUserRepository");
const getUserUseCase_1 = require("../appliaction/getUserUseCase");
const getUserController_1 = require("./controllers/getUserController");
const registerUserController_1 = require("./controllers/registerUserController");
const registerUserUseCase_1 = require("../appliaction/registerUserUseCase");
const mysqlOfferRepository_1 = require("./mysqlOfferRepository");
const registerOfferUseCase_1 = require("../appliaction/registerOfferUseCase");
const getOfferUseCase_1 = require("../appliaction/getOfferUseCase");
const deleteOfferUseCase_1 = require("../appliaction/deleteOfferUseCase");
const registerOfferController_1 = require("./controllers/registerOfferController");
const getOfferController_1 = require("./controllers/getOfferController");
const deleteOfferController_1 = require("./controllers/deleteOfferController");
// Repositorios y casos de uso para usuarios
const mysqlUserRepository = new mysqlUserRepository_1.MysqlUserRepository();
const getUsersUseCase = new getUserUseCase_1.GetUserUseCase(mysqlUserRepository);
exports.getUserController = new getUserController_1.GetUserController(getUsersUseCase);
const registerUserUseCase = new registerUserUseCase_1.RegisterUserUseCase(mysqlUserRepository);
const registerUserController = new registerUserController_1.RegisterUserController(registerUserUseCase);
// Repositorios y casos de uso para ofertas
const mysqlOfferRepository = new mysqlOfferRepository_1.MysqlOfferRepository();
const registerOfferUseCase = new registerOfferUseCase_1.RegisterOfferUseCase(mysqlOfferRepository);
const registerOfferController = new registerOfferController_1.RegisterOfferController(registerOfferUseCase);
exports.registerOfferController = registerOfferController;
const getOfferUseCase = new getOfferUseCase_1.GetOfferUseCase(mysqlOfferRepository);
const getOfferController = new getOfferController_1.GetofferController(getOfferUseCase);
exports.getOfferController = getOfferController;
const getAllOffers = new getOfferUseCase_1.GetOfferUseCase(mysqlOfferRepository);
//const getOffersUseCase = new GetoffersUseCase(mysqlOfferRepository); // Crear instancia de GetoffersUseCase
//const getAllOffersController = new GetOffersController(getOffersUseCase);
const deleteOfferUseCase = new deleteOfferUseCase_1.DeleteOfferUseCase(mysqlOfferRepository);
const deleteOfferController = new deleteOfferController_1.DeleteOfferController(deleteOfferUseCase);
exports.deleteOfferController = deleteOfferController;
