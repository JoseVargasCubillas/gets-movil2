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
exports.DeleteOfferController = void 0;
class DeleteOfferController {
    constructor(deleteOfferUseCase) {
        this.deleteOfferUseCase = deleteOfferUseCase;
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const offerId = parseInt(id);
                const deleted = yield this.deleteOfferUseCase.run(offerId);
                if (deleted) {
                    return res.status(200).send({
                        status: "success",
                        message: "Offer deleted successfully"
                    });
                }
                else {
                    return res.status(404).send({
                        status: "error",
                        message: "Offer not found"
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while deleting the offer"
                });
            }
        });
    }
}
exports.DeleteOfferController = DeleteOfferController;
