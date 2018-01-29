Javascript 

Metodos y propiedades de texto y ventanas emergentes:

para escribir un texto en la pagina web.

document.wirte("Hola esto es un texto");

para invocar ventanas emergentes:

var nombre = prompt("Ingresa aqui tu nombre");

alert("tu nombre es " + nombre);

Metodos y propiedades para Arrays:

length, push, pop, unshift, shift

los arrays se declaran de la siguiente manera:

var numero=["1","2","3","4"];

var numero = new array("1", "2", "3", "4");

var numero = []; <-- array vacio

Programación orientada a objetos.

Ejemplo: 

Propiedades:

es todo lo que posee el objeto por ejemplo:

class carro{

var ruedas = 4;
var motor = 1;
var puertas = 4;
var butacas = 5;

}

contructores de condiciones:

== igual que...
!= diferente que....
< mayor que...
> menor que....
<= menor o igual que...
>= mayor o igual que...
=== Estrictamente igual que...(comprueba tambein tipos)
!== estrictamente diferente que...(comprueba tipos)
&& "Y" logico
|| "o" logico

para declarar una variable tipo INTEGER en un prompt, debemos utilizar el siguiente metodo:

var numero = parseInt(prompt("Introdusca su numero: "));

Funciones libreria Jquey

.html() = puede reemplazar texto que se tenga en la pagina web

.text() = reemplaza las cadenas de texto de las etiquetas html pero no es capaz de interactuar con las etiquetas

.append() = puede agregar un texto a continuación de lo que halla dentro de una etiqueta

.prepend() = puede agregar un texto anteriormente de lo que halla dentro de una etiqueta

.before() =  agrega los elementos antes del contenedor seleccionado "div"

.after() =  agrega los elementos despues del contenedor seleccionado "div"

.addClass() = agrega un estilo de clase "Funciona para etiquetas de clase de CSS"

.toggleClass() = dota a un elemento de una pagina web de un comportamiento tipo on/off (Es una fusión de addClass y removeClass)

.removeClass() =  quita un estilo de clase que pueda tener una etiqueta de clase de CSS

.onClick() = atributo que se coloca en las etiquetas de html para llamar a funciones, por ejemplo: onClick="Funcion()"

.remove() = Elimina un contenido que puede contener unaq pagina web

.replaceWith() = reemplaza un elemento que pueda contener una pagina web por otro

.target() = indica cual es el origen del evento

.show() = Muestra un atributo

.hide() = oculta un atributo

.hover() = hace un efecto de mouseover y mouseout al mismo tiempo

.toggle() = 

.css() = permite capturar, guardar, leer la propiedad de un elemento que puede tener una pagina web y tambien puede cambiar una propiedad css que tenga la misma.
Sintaxis {
	

	.css("propiedad_css")

	.css("propiedad_css", valor)

	.css("propiedad_css":"valor", "propiedad_css":"valor")
 
}

attr: Modifica la etiqueta HTML segun cual sea la setencia

attr() = (sintaxis) attr("atributo", "valor");

removeAttr()= (sintaxis) removeAttr("atributo");

Eventos: Son desencadenantes de acciones

Eventos del mouse:

click(), dblclick(), mouseDown(), mouseUp(), mouseover(), Mouseout(), Mousemove()

Eventos del teclado:

keypress(), keydown()

Eventos de documentos o ventanas

load(), resize(), scroll(), unload()

Eventos de formulario

submit(), reset(), change(), focus(), blur()



