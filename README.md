***
### API DE UN CRUD PARA UNA APP MOBILE 🛡
***

#### Herramientas para este proyecto

```bash
#Instalar dependencias
> npm i
```

***
#### Levantar api

```bash
#Descargar una copia del reposirotio en local
> git clone <url_repositorio>
```

```bash
#Levantar api
> npm run dev
```

***
###### LexarPE - 2026 - 02

***

### Documentación de la API 📡

La API está estructurada en tres servicios principales: Clientes, Pasteles y Usuarios.

**Base URL**: `http://localhost:3000/v1`

#### 1. Clientes (`/cliente`)

| Método | Endpoint | Acción | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/all` | Obtener todos | N/A |
| `POST` | `/add` | Agregar | `{ "dni": "...", "nombre": "...", "direccion": "...", "movil": "...", "email": "..." }` |
| `POST` | `/bydni` | Buscar por DNI | `{ "dni": "..." }` |
| `PUT` | `/update` | Actualizar | `{ "dni": "...", "nombre": "...", ... }` |
| `DELETE` | `/delete` | Eliminar | `{ "dni": "..." }` |

#### 2. Pasteles (`/pastel`)

| Método | Endpoint | Acción | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `GET` | `/all` | Obtener todos | N/A |
| `POST` | `/add` | Agregar | `{ "idpastel": "...", "descripcion": "...", "modelo": "...", "precio_venta": 0, "tematica": "...", "observacion": "..." }` |
| `PUT` | `/update` | Actualizar | `{ "idpastel": "...", "descripcion": "...", ... }` |
| `DELETE` | `/delete` | Eliminar | `{ "idpastel": "..." }` |

#### 3. Usuarios (`/usuario`)

| Método | Endpoint | Acción | Body (JSON) |
| :--- | :--- | :--- | :--- |
| `POST` | `/add` | Registrar | `{ "nombre": "...", "clave": "..." }` |
| `POST` | `/get` | Login | `{ "nombre": "...", "clave": "..." }` |
