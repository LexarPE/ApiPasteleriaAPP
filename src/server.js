import express from "express";
import cors from "cors";

import ClientesRoutes from "./services/cliente/routesClient.js";
import PastelesRoutes from "./services/pastel/routerPastel.js";
import UsuariosRoutes from "./services/usuario/routerUsuario.js";



const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: true,
  }),
);


app.use("/v1/cliente", ClientesRoutes);
app.use("/v1/pastel", PastelesRoutes);
app.use("/v1/usuario", UsuariosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en puerto ${PORT}`);
});
