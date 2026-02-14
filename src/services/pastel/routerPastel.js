import { connection } from "../../Config/constants.js";
import {
  addPastel,
  getPastel,
  putPastel,
  deletePastel,
} from "./pastelService.js";
import { Router } from "express";

const router = Router();

router.post("/add", async (req, res) => {
  try {
    const pastel = req.body;
    await addPastel(connection, pastel);
    res.json({ msg: "Pastel creado" });
  } catch (error) {
    res.json({
      msg: "Ocurrio un error al agregar un nuevo pastel",
    });
  }
});

router.get("/all", async (req, res) => {
  try {
    const data = await getPastel(connection);
    if (data.length < 1) res.json({ msg: "No se encontro ningun pastel" });
    else res.json(data);
  } catch (error) {
    res.json({
      msg: "Ocurrio un error en la extraccion de pasteles",
    });
  }
});

router.put("/update", async (req, res) => {
  try {
    const pastel = req.body;
    const data = await putPastel(connection, pastel);
    res.json({ msg: data });
  } catch (error) {
    res.json({
      msg: "Ocurrio un error en la actualizacion de pastel",
    });
  }
});

router.delete("/delete", async (req, res) => {
  try {
    const { idpastel } = req.body;
    const data = await deletePastel(connection, idpastel);
    res.json({
      msg: data,
    });
  } catch (error) {
    res.json({
      msg: "Ocurrio un error en la eliminacion de pastel",
    });
  }
});

export default router;
