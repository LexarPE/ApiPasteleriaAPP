import { connection } from "../../Config/constants.js";
import {
  getCliente,
  getClienteByDni,
  updateCliente,
  insertCliente,
  deleteCliente,
} from "./clienteService.js";
import { Router } from "express";

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const addClient = req.body;
    await insertCliente(connection, addClient);
    res.json({ msg: "Cliente creado" });
  } catch (error) {
    res.json({
      msg: "Ocurrio un error al agregar un nuevo cliente",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const listClient = await getCliente(connection);
    if (listClient.length < 1) res.json({ msg: "No se encontro ningun cliente" });
    else res.json(listClient);
  } catch (error) {
    res.json({ msg: "Ocurrio un error en la extraccion de clientes" });
  }
});

router.post("/bydni", async (req, res) => {
  try {
    const { dni } = req.body;
    const getClientByDni = await getClienteByDni(connection, dni);
    if (getClientByDni.length < 1) res.json({ msg: "No se encontro el cliente" });
    else res.json(getClientByDni);
  } catch (error) {
    res.json({ msg: "Ocurrio un error en la extraccion de cliente" });
  }
});

router.put("/update", async (req, res) => {
  try {
    const clienteUpdate = req.body;
    const data = await updateCliente(connection, clienteUpdate);
    res.json({ msg: data });
  } catch (error) {
    res.json({ msg: "Ocurrio un error en la actualizacion de cliente" });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { dni } = req.body;
    const data = await deleteCliente(connection, dni);
    res.json({
      msg: data
    });
  } catch (error) {
    res.json({
      msg: "Ocurrio un error en la eliminacion de cliente",
    });
  }
});

export default router;
