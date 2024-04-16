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
exports.GetOffersController = void 0;
class GetOffersController {
    constructor(getOffersUseCase) {
        this.getOffersUseCase = getOffersUseCase;
    }
    getAllOffers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getAll = yield this.getOffersUseCase.run();
                if (getAll) {
                    return res.status(200).send({
                        status: "success",
                        data: {
                            list: getAll
                        }
                    });
                }
                else {
                    return res.status(204).send({
                        status: "ok",
                        message: "Content not found"
                    });
                }
            }
            catch (error) {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while listing the offers."
                });
            }
        });
    }
}
exports.GetOffersController = GetOffersController;
