# Navigator

## Navega con seguridad

Navigator es un proyecto cuyo objetivo principal es la navegación segura del usuario por carreteras y autovías a nivel nacional.

Esta aplicación ha sido dessarrollada con la siguiente arquitectura.

## Arquitectura de la aplicación

### Backend

El backend consta de wrappers encargados de recopilar información de determinadas páginas que ofrece la Dirección General de Tráfico de España.

Este procedimiento se hace mediante Python al igual que la API que se levanta después.

### Frontend

El frontend ha sido desarrollado mediante Angular 9 Typescript. 

### Deploy

El deploy del producto se realiza en modo de desarrollo, ya que se  utiliza el modo de desarrollo que brinda Angular que permite una visualización rápida de la aplicación y disponer de un control de errores. También se hace uso del modo Dev Container que brinda Visual Studio Code que gracias a Docker levanta un entorno seguro desde el que realizar pruebas y el poder visualizar el producto correctamente.

## Vistas de la aplicación

### Vista principal

![Vista principal](/images/VistaPrincipal.png "Vista principal")

### Visualización de accidentes

![Vista accidentes](/images/VistaAccidentes.png "Vista accidentes")

### Búsqueda de accidentes

![Búsqueda de accidentes](/images/BusquedaAccidentes.png "Búsqueda de accidentes")
