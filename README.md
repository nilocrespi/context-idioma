Consigna: Contexto de idioma en React
Vas a crear una aplicación simple en React que utilice Context API para manejar un idioma global en la aplicación.
Objetivo
Implementar un LanguageContext que permita alternar entre Español e Inglés.


Mostrar que el idioma elegido afecta a todas las vistas de la app.


Requisitos
Crea un contexto global que guarde el idioma actual y una función para cambiarlo.


La aplicación debe tener al menos dos vistas (ejemplo: Inicio y Perfil).


En la vista de Inicio debe aparecer un botón que permita cambiar el idioma.


El contenido textual (títulos, párrafos, botones) debe mostrarse en el idioma elegido.


Cuando cambies el idioma en Inicio, también debe reflejarse automáticamente en la vista de Perfil (sin pasar props manualmente).


Usa un navegador de rutas para poder moverte entre vistas (ejemplo: Inicio ↔ Perfil).


Entrega
Entregar la aplicación funcionando en React.


Incluir una breve explicación de cómo useContext ayudó a evitar el prop drilling.