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
exports.MysqlUserRepository = void 0;
const mysql_1 = require("../../../database/mysql");
const user_1 = require("../domain/user");
class MysqlUserRepository {
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM user WHERE id = ?";
                const [rows] = yield (0, mysql_1.query)(sql, [id]);
                if (!Array.isArray(rows) || rows.length === 0) {
                    return null; // Si no se encontró ningún usuario, retornar null
                }
                const row = rows[0];
                const user = new user_1.User(row.id, row.name, row.lastname, row.phone, row.email, row.birthday, row.password // Agregar la contraseña si es necesaria
                );
                return user;
            }
            catch (error) {
                console.error('Error al obtener el usuario:', error);
                throw new Error('Error al obtener el usuario'); // Lanzar un error para manejarlo en niveles superiores si es necesario
            }
        });
    }
    // Agregar método para registrar usuario si es necesario
    registerUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "INSERT INTO user (id, name, lastname, phone, email, birthday, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
                yield (0, mysql_1.query)(sql, [user.id, user.name, user.lastname, user.phone, user.email, user.birthday, user.password]);
                return user; // Retornar el usuario registrado
            }
            catch (error) {
                console.error('Error al registrar el usuario:', error);
                throw new Error('Error al registrar el usuario');
            }
        });
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
