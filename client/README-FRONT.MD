<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Videogames

<p align="right">
  <img height="200" src="../videogame.png" />
</p>

## Pasos realizados en el FRONT-END

1. Nuevamente instalamos dependencias, mediante npm i esta vez es el turno de
   React-redux : Contenedor de estados.
   Redux-thunk: Es un middleware,sirve para trabajar las llamadas asincronas.
   React-router-dom : Sirve para crear el enrutado de la pagina.
   Axios: Consumir peticiones.
2. Creamos el Store,Reducer y Actions con sus respectivos index, el middleware que es el puente que sirve para comunicar el back con el fornt.
   En el Store se almacena el estado de aplicacion,permite que los estados se actualicen,permite el acceso a los estados.
   En el Reducer hacemos la logica de las acciones.
   En las Acciones despachamos las mismas.
3. Envolvemos en un Provider y en un BrowserRouter a la app en el Index.js
4. Creamos el primer componente landing page, que es nuestra primer imagen de la pagina, con su respectivo boton de ingreso.
   Importamos el componente en la app y enrutamos la landingPage.
5. Creamos el segundo componente CardVideogame, que va ser nuestra card en la Home.
6. Creamos nuestro componente Home, nuestra pagina principal, contenedor de la mayor parte de los componentes que creamos.
   Dentro del componente Home, usamos hooks para poder crear estados y para despachar las actiones y los states necesarios para la manipulacion de los videojuegos.
   Usamos UseEffect para modificar esos estados, ya que con las acciones que despachamos, esos estados se van modificando.
7. Creamos el paginado sabiendo que tenemos que mostrar 15 videojuegos por pagina.
8. Creamos las funcionalidades de la pagina, a travez de funciones handle, las cuales sirven para que se renderize a pedido del usuario distintas distribuciones de los videojuegos, ya sea por orden alfabetico, o por un ranking de puntajes, ademas de que podemos filtrar los videojuegos por sus distintos generos.
9. Creamos un componente NavBar y un componente SearchBar, el primero para ubicar los botones de creacion de un videojuego y un Refresh para volver al state inicial, que carga todos los videojuegos.
10. Creamos el componente Create usando Hooks,[input, setInput] y [errors, setErrors] para tener un estado de errores y alertar al usuario, si no esta cumpliendo con los requerimientos para crear un nuevo videojuego.
11. Creamos el componente Error, Loading y Page 404 para que cuando este cargando la pagina, o la ruta no sea la deseada o no encuentre videojuegos con el nombre ingresado, la pagina no se rompa y podamos volver al Home.
12. Por ultimo nos encargamos de enbellecer un poco la pagina, creando una carpeta Style y a travez module.css manejamos la edicion de los componentes.

#### Tecnologías necesarias:

- [ ] React
- [ ] Redux
- [ ] Redux-Thunk
- [ ] Css
