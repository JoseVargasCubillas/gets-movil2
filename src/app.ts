import express from "express";
import cors from "cors";
import { Signale } from 'signale';
// import * as admin from "firebase-admin";
import fileUpload from 'express-fileupload'; // Importa express-fileupload
import dotenv from "dotenv";
import {userRouter } from "./store/User/infraestructure/userRouter";
import { offerRouter } from "./store/User/infraestructure/offerRouter";

dotenv.config();

// Inicializa la aplicación Express
const app = express();
const signale = new Signale();


// Configura middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configura express-fileupload
app.use(fileUpload()); // Agrega esta línea para configurar express-fileupload

// Configura las rutas
app.use('/api/v1/user', userRouter);
app.use('/api/v1/offer', offerRouter);

// Configura el puerto
const port = 8080 ;
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});


