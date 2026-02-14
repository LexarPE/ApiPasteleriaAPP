
export async function addUsuario(connection, { nombre, clave }) {
  try {
    const [results] = await connection.query(
      "INSERT INTO USUARIO(nombre,clave)VALUES(?,?)",
      [nombre, clave],
    );

    return results;
  } catch (err) {
    throw new Error(err);
  }
}

export async function verificarUsuario(connection, { nombre, clave }) {
  try {
    const [results] = await connection.query(
      "SELECT * FROM USUARIO WHERE nombre = ? AND clave = ?",
      [nombre, clave],
    );

    return results;
  } catch (err) {
    throw new Error(err)
  }
}
