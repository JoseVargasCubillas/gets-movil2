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
exports.RegisterOfferController = void 0;
class RegisterOfferController {
    constructor(registerOfferUseCase) {
        this.registerOfferUseCase = registerOfferUseCase;
        this.registerOfferUseCase = registerOfferUseCase;
    }
    register(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id, title, description, price, discount, availability } = req.body;
                const offer = {
                    id: id,
                    title: title,
                    description: description,
                    price: price,
                    availability: availability,
                    discount: discount,
                };
                const newOffer = yield this.registerOfferUseCase.run(offer);
                if (newOffer) {
                    return res.status(201).send({
                        status: "success",
                        data: {
                            message: "Offer registered successfully",
                            offer: newOffer
                        }
                    });
                }
                else {
                    return res.status(500).send({
                        status: "error",
                        message: "An error occurred while registering the offer."
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while registering the offer."
                });
            }
        });
    }
}
exports.RegisterOfferController = RegisterOfferController;
