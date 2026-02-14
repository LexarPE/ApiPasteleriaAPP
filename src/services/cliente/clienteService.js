export async function getCliente(connection) {
  try {
    const [results] = await connection.query("SELECT * FROM cliente");
    return results;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getClienteByDni(connection, dni) {
  try {
    const [results] = await connection.query(
      "SELECT * FROM cliente WHERE dni_cliente = ?",
      [dni],
    );

    return results;
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCliente(
  connection,
  { nombre, direccion, movil, email, dni },
) {
  try {
    const [results] = await connection.query(
      "UPDATE cliente SET nombre = ?, direccion = ?, movil = ?, email = ? WHERE dni_cliente = ?",
      [nombre, direccion, movil, email, dni],
    );
    if (results.affectedRows) {
      if (results.changedRows) {
        return "Row modificado"
      }
      return "Sin modificaciones nuevas"
    }
    else return "La row seleccionada no existe"
  } catch (err) {
    throw new Error(err);
  }
}

export async function insertCliente(connection, { nombre, direccion, movil, email, dni }) {
  try {
    const [results] = await connection.query(
      "INSERT INTO db_pasteleria.cliente(dni_cliente, nombre, direccion, movil, email, fecha_registro)VALUES(?, ?, ?, ?, ?, current_timestamp());",
      [dni, nombre, direccion, movil, email],
    );

    return results;
  } catch (err) {
    throw new Error(err);
  }
}


export async function deleteCliente(connection, dni) {
  try {
    const [results] = await connection.query(
      "DELETE FROM CLIENTE WHERE dni_cliente = ?",
      [dni],
    );
    if (results.affectedRows) return "Row eliminada";
    return "Esa row ya esta eliminada o no existe";
  } catch (err) {
    throw new Error(err);
  }
}