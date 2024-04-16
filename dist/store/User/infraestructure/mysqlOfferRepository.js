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
    registeroffer(offer) {
        throw new Error("Method not implemented.");
    }
    getoffer(id) {
        throw new Error("Method not implemented.");
    }
    updateOfferById(product) {
        throw new Error("Method not implemented.");
    }
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
    getOffers() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM offer";
                const [rows] = yield (0, mysql_1.query)(sql);
                if (!Array.isArray(rows) || rows.length === 0) {
                    return null; // Si no se encontró ninguna oferta, retornar null
                }
                const offers = rows.map((row) => {
                    return new offer_1.Offer(row.id, row.title, row.description, row.price, row.availability, row.discount);
                });
                return offers;
            }
            catch (error) {
                console.error('Error al obtener las ofertas:', error);
                throw new Error('Error al obtener las ofertas');
            }
        });
    }
    deleteOffer(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "DELETE FROM offer WHERE id = ?";
                const result = yield (0, mysql_1.query)(sql, [id]);
                // Verificar si se eliminó correctamente (rowCount es 1 si se eliminó, de lo contrario es 0)
                if (result && result.affectedRows && result.affectedRows === 1) {
                    // Se eliminó correctamente, devolver null ya que la oferta ya no existe
                    return null;
                }
                // La oferta no existía, devolver null
                return null;
            }
            catch (error) {
                console.error('Error al eliminar la oferta:', error);
                throw new Error('Error al eliminar la oferta');
            }
        });
    }
}
exports.MysqlOfferRepository = MysqlOfferRepository;
