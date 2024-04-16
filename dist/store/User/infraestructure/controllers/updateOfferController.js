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
exports.UpdateOfferController = void 0;
const offer_1 = require("../../domain/offer");
class UpdateOfferController {
    constructor(updateOfferByIdUseCase) {
        this.updateOfferByIdUseCase = updateOfferByIdUseCase;
    }
    updateOffer(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = parseInt(req.params.id); // Convertir el id a número
                const { title, description, price, discount, availability } = req.body;
                const updatedOffer = new offer_1.Offer(id, title, description, price, availability, discount);
                const result = yield this.updateOfferByIdUseCase.execute(id, updatedOffer);
                if (result) {
                    return res.status(200).json({
                        status: "success",
                        data: {
                            message: "Offer updated successfully",
                            offer: result,
                        },
                    });
                }
                else {
                    return res.status(404).json({
                        status: "error",
                        message: "Offer not found",
                    });
                }
            }
            catch (error) {
                console.error("Error updating offer:", error);
                return res.status(500).json({
                    status: "error",
                    message: "An error occurred while updating the offer",
                });
            }
        });
    }
}
exports.UpdateOfferController = UpdateOfferController;
