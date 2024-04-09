"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Offer = void 0;
class Offer {
    constructor(id, title, description, price, availability, discount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.discount = discount;
    }
}
exports.Offer = Offer;
