# PRUEBA TECNICA FRONTEND - RIMAC

## Descripcion:

Desarrollo de maquetacion de figma y consumo de api rest haciendo uso de fecth, del reto frontend Rimac

### Inicar

1.  Instalar los paquetes: npm install
2.  Levantar servidor: npm run dev

#### Credenciales:

- Estas son las credenciales para poder logearse

    document: "30216147",
    phone: "513021614",

### Definicion

- La aplicacion cuenta con dos rutas, la principal que se necesitan credenciales, y la ruta /dashboar en esta le permite seleccionar el plan, para este entonces los datos del usuario obtenido se almacenan en redux para mantener el estado.

- Los datos del plan seleccionado tambien se almacenan en redux, para poder visualizarlos en la vista de resumen, y cada vez que se regresaa la pagina principal, los datos deredux se eliminan.

##### Se ha hecho uso de la api de google para obtener un tipo de fuente y algunos iconos que se requerian par algunos componentes.

### Librerias utilziadas.

1. Redux toolkit para manejar el estado global de la aplicacion.
2. React router para manejar diferentes rutas
3. Sass.