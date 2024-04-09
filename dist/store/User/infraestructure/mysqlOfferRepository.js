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
exports.MysqlOfferRepository = void 0;
const mysql_1 = require("../../../database/mysql");
const offer_1 = require("../domain/offer");
class MysqlOfferRepository {
    getOffer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM offer WHERE id = ?";
                const [rows] = yield (0, mysql_1.query)(sql, [id]);
                if (!Array.isArray(rows) || rows.length === 0) {
                    return null; // Si no se encontró ninguna oferta, retornar null
                }
                const row = rows[0];
                const offer = new offer_1.Offer(row.id, row.title, row.description, row.price, row.availability, row.discount);
                return offer;
            }
            catch (error) {
                console.error('Error al obtener la oferta:', error);
                throw new Error('Error al obtener la oferta'); // Lanzar un error para manejarlo en niveles superiores si es necesario
            }
        });
    }
    registerOffer(offer) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO offer (id, title, description, price, availability,discount) VALUES (?, ?, ?, ?, ?, ?)";
                yield (0, mysql_1.query)(sql, [
                    offer.id,
                    offer.title,
                    offer.description,
                    offer.price,
                    offer.availability,
                    offer.discount,
                ]);
                return offer; // Retornar la oferta registrada
            }
            catch (error) {
                console.error('Error al registrar la oferta:', error);
                throw new Error('Error al registrar la oferta');
            }
        });
    }
}
exports.MysqlOfferRepository = MysqlOfferRepository;
