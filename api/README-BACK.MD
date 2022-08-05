<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Videogames

<p align="right">
  <img height="200" src="../videogame.png" />
</p>

## Pasos realizados en el BackEnd.

1. Creamos una base de datos con Postgres para almacenar la info, en este caso food.
2. Creamos un archivo .env con los datos del HOST,USER,PASSWORD,DB_NAME,API_KEY para poder ser invocados nuevamente a travez de process.env y que esa info **NO** sea publica.
3. Creamos los modelos y hacemos su relacion, con su tabla intermedia. Esto se logra gracias a Sequelize, que hace de ORM.
4. En el modelo Videojuego, detallamos que atributos no pueden ser nulos,y agregamos un tipo UUID al ID para que lo genere automaticamente y con un mayor indice de seguridad.
   Y el modelo Genero le atribuimos solamente un nombre.
5. Creamos las rutas y controladores, mediante axios podemos realizar consultas o pedidos http.
   En los controllers creamos lo que seria las funciones, ya que es todo el manejo de info de la API y la DB.
   En las rutas, directamente recibimos los req y enviamos las respuestas.
6. Probamos en Postman si las rutas estan correctas y si las peticiones se hacen correctamente.

**IMPORTANTE**: No se olvide de instalar las dependencias mediante npm i - npm install. Chequear el package.json

#### Tecnologías necesarias:

- [ ] Express
- [ ] Sequelize - Postgres

### Únicos Endpoints/Flags que pueden utilizar

- GET https://api.rawg.io/api/games
- GET https://api.rawg.io/api/games?search={game}
- GET https://api.rawg.io/api/genres
- GET https://api.rawg.io/api/games/{id}
