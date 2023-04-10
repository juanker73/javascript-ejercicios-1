alert("Hola Mundooo!!! arrancamos con Javascript");
alert("Estos son los ejercicios que debes completar");
alert("para ver funcionar cada ejercicio debes desmarcar los comentarios");
//comentario de una linea
/*comentario
en
varias lineas */

//variable=lugar reservado para guardar datos
//declaracion | asignacion |inicializacion

//let color = "rojo";

//var, let, const

//buenas practicas en nombres de variables

//todos los nombres comienzan con minuscula
// javascipt es un lenguaje camelCase

//let gustoDeHeladoFavorito = "Dulce de leche"


/*Saludo
● Crear un programa que pida al usuario ingresar un nombre y apellido por
separado, y luego muestre un mensaje que diga, "Hola {nombre} {apellido},
bienvenida a Ada".

let nombre = prompt("ingrese su nombre");
let apellido = prompt("ingrese su apellido");

alert(`Hola ${nombre} ${apellido} bienvenido a ADA`)

console.log (nombre);
console.log (apellido);


Heladería
● Crear un programa que pida al usuario ingresar, por separado, tres gustos de
helado, y luego muestre un mensaje que diga, por ejemplo, "Aquí tiene su
helado de chocolate, dulce de leche y menta granizada".

let sabor1 = prompt("Ingresa un sabor de helado")
let sabor2 = prompt("Ingresa otro sabor de helado")
let sabor3 = prompt("Ingresa un ultimo sabor de helado")

alert(`Aquí tienes tu helado de ${sabor1}, ${sabor2} y ${sabor3} , disfrutalo!!!`)

console.log (sabor1)
console.log (sabor2)
console.log (sabor3)

Datos personales
● Crear un programa que pida al usuario ingresar, por separado, nombre,
    apellido, edad, nacionalidad, documento, y muestre luego un mensaje que
diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

let nombre = prompt("Ingrese su Nombre");
let apellido = prompt("Ingrese su Apellido");
let edad = prompt("Ingrese su edad");
let nacionalidad = prompt("Ingrese su Nacionalidad");
let dni = prompt("Ingrese su Numero de Documento");

console.log(nombre);
console.log(apellido);
console.log(edad);
console.log(nacionalidad);
console.log(dni);

alert(`${nombre} ${apellido} tiene ${edad} años, es ${nacionalidad} y su documento es ${dni}`);

Lista de reproducción

● Crear un programa que pida al usuario ingresar, por separado, el nombre de
una playlist y el título de tres canciones, y al finalizar se muestre un mensaje
que diga, p.ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones
'Africa', 'Maniac', 'Final Countdown'".

let playlist = prompt("Ingrese el nombre de la playlist");
let tema1 = prompt("Ingrese el nombre de una cancion");
let tema2 = prompt("Ingrese el nombre de otra cancion");
let tema3 = prompt("Ingrese el nombre de una tercera can;cion")

alert(`Su Playlist se llama ${playlist} la primera cancion es ${tema1} la segunda es ${tema2} y finalmente ${tema3}`);

console.log(playlist);
console.log(tema1);
console.log(tema2);
console.log(tema3);

Dirección completa
● Crear un programa que pida al usuario ingresar, por separado, la calle, el
número, el departamento, el código postal, la ciudad y el país, y muestre un
mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado
es: Calle Falsa 123 3C, 1414, CABA, Argentina".

let calle = prompt("Ingrese el nombre de la calle donde vive");
let numero = prompt("Ingrese el numero de su casa");
let depto = prompt("Ingrese su numero de departamento");
let cod = prompt("Ingrese su codigo postal");
let ciudad = prompt("Ingrese su ciudad");
let pais = prompt("Ingrese su pais");

console.log(calle);
console.log(numero);
console.log(depto);
console.log(cod);
console.log(ciudad);
console.log(pais);

alert (`La dirección que ha ingresado es:${calle} ${numero}, departamento ${depto}, codigo postal: ${cod}, ${ciudad}, ${pais}`);




Años perro
● Crear un programa que pida ingresar una edad y devuelva el equivalente de
esas edad en años perro.

let edad = prompt("ingrese cuantos años tiene su perro");
let resultado = ((edad) * 7)

console.log(edad);
alert(`Su perro tiene el equivalente a ${resultado} años humanos`);


Minutos a segundos
● Crear un programa que pida ingresar una cantidad en minutos mediante un y
muestre un mensaje con el resultado de la conversión en segundos.

let minutos = prompt("ingrese la cantidad de minutos");
let resultado =((minutos)*60);
console.log(minutos);
alert(`La cantidad de minutos ingresada, equivale a ${resultado} segundos.`);


Días a segundos
● Crear un programa que pida ingresar una cantidad de días y muestre un
mensaje con el resultado de la conversión en segundos.

let dia = prompt("ingrese una cantidad de dias");
let segundos = ((((dia)*24)*60)*60);

 console.log(dia);

 alert(`la cantidad de dias ingresados equvalen a ${segundos} segundos`);


 console.log(dia);

 alert(`la cantidad de ${dia} dia/dias ingresados equivale a la cantidad de ${resultado} segundos`);


Kilómetros a millas
● Crear un programa que pida ingresar una cantidad de kilómetros y muestre
un mensaje con el resultado de la conversión en millas.

let kilometros = prompt("Ingrese una cantidad de kilometros");

console.log(kilometros);
let resultado = (((kilometros)*0.62));

alert(`${kilometros} kilometros son equivalentes a ${resultado} millas.`);



Área de un triangulo
● Crear un programa que pida al usuario ingresar el valor de la base y el valor
de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

let base = prompt("ingrese la medida de la base del triangulo");
let altura = prompt("ingrese la medida de la altura del triangulo");
let resultado = (((base)*(altura))/2);

console.log(base);
console.log(altura);

alert(`El area del triangulo es igual a ${resultado}`);


Perímetro de un rectángulo
● Crear un programa que pida al usuario ingresar el valor de la altura y el valor
del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

let alto = prompt("ingrese la altura del rectángulo");
let ancho = prompt("ingrese el ancho del rectángulo");
let result = (2* alto +  2* ancho);

console.log(alto);
console.log (ancho);

alert(`El perimetro del rectangulo es de ${result}`);



Porcentaje
● Crear un programa que pida al usuario ingresar un número, y luego el
porcentaje que se desea obtener del mismo.Devolver un mensaje muestre el
porcentaje de dicho número.

let number = prompt ("ingresa un numero");
let percent = prompt ("ingrese un porcentaje");
let result = ((number * percent)/100);

console.log(number);
console.log(percent);
alert(`el ${percent} por ciento de ${number} es ${result}`);*/

