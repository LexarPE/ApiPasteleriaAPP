import { connection } from "../../Config/constants.js";
import { verificarUsuario, addUsuario } from "./usuarioService.js";
import { Router } from "express";

const router = Router();

router.post("/get", async (req, res) => {
  try {
    const user = req.body;
    const data = await verificarUsuario(connection, user);
    console.log(data);
    if (!data) res.json({ msg: "No se encontraron datos" });
    else res.json({ ...data[0], msg: "Login correcto", auth: true });
  } catch (error) {
    res.json({ error: error });
  }
});

router.post("/add", async (req, res) => {
  try {
    const user = req.body;
    const data = await addUsuario(connection, user);
    if (data) res.json({ msg: "Usuario agregado", auth: true });
  } catch (error) {
    res.json({ error: " Ocurrio un error al agregar usuario" });
  }
});

export default router;
