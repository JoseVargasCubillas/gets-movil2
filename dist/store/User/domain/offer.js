"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOffert = exports.UpdateOffert = exports.Offer = void 0;
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
class UpdateOffert {
    constructor(id, title, description, price, availability, discount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.discount = discount;
    }
}
exports.UpdateOffert = UpdateOffert;
class DeleteOffert {
    constructor(id, title, description, price, availability, discount) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.discount = discount;
    }
}
exports.DeleteOffert = DeleteOffert;
