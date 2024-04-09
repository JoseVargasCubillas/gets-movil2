"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUserController = exports.registerUserUseCase = exports.getUserController = exports.getUsersUseCase = exports.mysqlUserRepository = void 0;
const mysqlUserRepository_1 = require("./mysqlUserRepository");
const getUsersUseCase_1 = require("../appliaction/getUsersUseCase");
const getUserController_1 = require("./controllers/getUserController");
const registerUserController_1 = require("./controllers/registerUserController");
const registerUserUseCase_1 = require("../appliaction/registerUserUseCase");
const registerOfferController_1 = require("./controllers/registerOfferController");
const registerOfferUseCase_1 = require("../appliaction/registerOfferUseCase");
const mysqlOfferRepository_1 = require("./mysqlOfferRepository");
exports.mysqlUserRepository = new mysqlUserRepository_1.MysqlUserRepository();
exports.getUsersUseCase = new getUsersUseCase_1.GetUserUseCase(exports.mysqlUserRepository);
exports.getUserController = new getUserController_1.GetUserController(exports.getUsersUseCase);
exports.registerUserUseCase = new registerUserUseCase_1.RegisterUserUseCase(exports.mysqlUserRepository);
// Crear una instancia de RegisterUserController que utiliza el caso de uso para manejar las solicitudes de registro de usuarios
exports.registerUserController = new registerUserController_1.RegisterUserController(exports.registerUserUseCase);
const offerRepository = new mysqlOfferRepository_1.MysqlOfferRepository();
const registerOfferUseCase = new registerOfferUseCase_1.RegisterOfferUseCase(offerRepository);
const registerOfferController = new registerOfferController_1.RegisterOfferController(registerOfferUseCase);
