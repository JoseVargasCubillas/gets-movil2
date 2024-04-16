"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterUserController = void 0;
class RegisterUserController {
    constructor(registerUserUseCase) {
        this.registerUserUseCase = registerUserUseCase;
        this.registerUserUseCase = registerUserUseCase;
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, name, lastname, phone, email, birthday, password } = req.body;
                const user = {
                    id: id,
                    name: name,
                    lastname: lastname,
                    phone: phone,
                    email: email,
                    birthday: birthday,
                    password: password
                };
                const newUser = yield this.registerUserUseCase.run(user);
                if (newUser) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            message: "User registered successfully",
                            user: newUser
                        }
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "An error occurred while registering the user."
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while registering the user."
                });
            }
        });
    }
}
exports.RegisterUserController = RegisterUserController;
