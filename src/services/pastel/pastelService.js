export async function addPastel(
  connection,
  { idpastel, descripcion, modelo, precio_venta, tematica, observacion = "" },
) {
  try {
    if (observacion.trim().length > 1) {
      const [results] = await connection.query(
        "INSERT INTO PASTEL(idpastel, descripcion, modelo, precio_venta, tematica, observacion)VALUES(?,?,?,?,?,?)",
        [idpastel, descripcion, modelo, precio_venta, tematica, observacion],
      );
      return results;
    } else {
      const [results] = await connection.query(
        "INSERT INTO PASTEL(idpastel, descripcion, modelo, precio_venta, tematica)VALUES(?,?,?,?,?)",
        [idpastel, descripcion, modelo, precio_venta, tematica],
      );
      return results;
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function getPastel(connection) {
  try {
    const [results] = await connection.query("SELECT * FROM PASTEL");
    return results;
  } catch (err) {
    throw new Error(err);
  }
}

export async function putPastel(connection, { descripcion, modelo, precio_venta, tematica, idpastel, observacion = "" }) {
  try {
    let results;
    if (observacion?.trim().length > 1) {
      [results] = await connection.query(
        "UPDATE PASTEL SET descripcion = ?, modelo = ?, precio_venta = ?, tematica = ?, observacion = ? WHERE idpastel = ?",
        [descripcion, modelo, precio_venta, tematica, observacion, idpastel],
      );
    } else {
      [results] = await connection.query(
        "UPDATE PASTEL SET descripcion = ?, modelo = ?, precio_venta = ?, tematica = ? WHERE idpastel = ?",
        [descripcion, modelo, precio_venta, tematica, idpastel],
      );
    }

    if (results.affectedRows) {
      if (results.changedRows) {
        return "Fila modificada";
      }
      return "Sin modificaciones nuevas";
    } else return "La fila seleccionada no existe";
  } catch (err) {
    throw new Error(err);
  }
}

export async function deletePastel(connection, idpastel) {
  try {
    const [results] = await connection.query(
      "DELETE FROM PASTEL WHERE idpastel = ?",
      [idpastel],
    );
    if (results.affectedRows) return "Pastel eliminado";
    return "Esa pastel ya esta eliminado o no existe";
  } catch (err) {
    throw new Error(err);
  }
}
