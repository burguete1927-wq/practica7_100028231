/* =========================================================
   Práctica 7 — script.js
   Materia: Programación de Aplicaciones Web (LSC - UNACH)
   ========================================================= */

console.log('%cPráctica 7 — script.js cargado correctamente', 'color:#0d6efd;font-weight:bold;');

/* =========================================================
   a) Variables y salida
   Objetivo: declarar variables con const/let y usar
   template literals para mostrar información en el DOM.
   ========================================================= */
document.getElementById('btnDatos').addEventListener('click', function () {

  // Declaración de constantes con los datos del alumno
  const nombre    = 'Alonso Gomez Burguete';
  const matricula = '100028231';
  const carrera   = 'Licenciatura en Sistemas Computacionales';
  const semestre  = 5;

  // Template literal (backticks) para construir el mensaje
  const mensaje =
    `Nombre: ${nombre} | Matrícula: ${matricula} | Carrera: ${carrera} | Semestre: ${semestre}`;

  // Salida en el DOM y en la consola
  document.getElementById('parDatos').textContent = mensaje;

  console.log('Datos mostrados:', nombre, matricula);
  console.log('Tipo de "semestre":', typeof semestre); // "number"
});

/* =========================================================
   b) Calculadora de calificaciones
   Objetivo: leer inputs, convertir con parseFloat(),
   validar con isNaN(), operar y decidir con if/else.
   ========================================================= */
document.getElementById('btnCalc').addEventListener('click', function () {

  // parseFloat convierte el string del input en número decimal
  const p1 = parseFloat(document.getElementById('p1').value);
  const p2 = parseFloat(document.getElementById('p2').value);
  const p3 = parseFloat(document.getElementById('p3').value);

  const parCalc = document.getElementById('parCalc');

  // Validación: si alguna entrada no es numérica, se detiene
  if (isNaN(p1) || isNaN(p2) || isNaN(p3)) {
    alert('Por favor ingresa los tres parciales.');
    parCalc.textContent = '';
    return;
  }

  // Cálculo del promedio
  const promedio = (p1 + p2 + p3) / 3;

  console.log('Promedio calculado:', promedio.toFixed(2));

  // Estructura de control: aprobado / reprobado
  if (promedio >= 70) {
    parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Aprobado ✔`;
    parCalc.style.color = '#198754'; // verde
  } else {
    parCalc.textContent = `Promedio: ${promedio.toFixed(2)} — Reprobado ✘`;
    parCalc.style.color = '#DC3545'; // rojo
  }
});

/* =========================================================
   c) Lista dinámica
   Objetivo: crear elementos con createElement(), insertarlos
   con appendChild() y vaciar la lista con innerHTML = ''.
   ========================================================= */
const inputItem = document.getElementById('inputItem');
const miLista   = document.getElementById('miLista');

// --- Agregar elemento ---
document.getElementById('btnAgregar').addEventListener('click', function () {

  const valor = inputItem.value.trim();

  // Si el campo está vacío, no se agrega nada
  if (valor === '') {
    alert('Escribe un elemento antes de agregarlo.');
    return;
  }

  // Creación del <li>
  const li = document.createElement('li');
  li.className   = 'list-group-item';
  li.textContent = valor;

  // Extra: eliminar el elemento al hacer clic sobre él
  li.addEventListener('click', function () {
    miLista.removeChild(li);
    console.log('Elemento eliminado:', valor);
  });

  miLista.appendChild(li);

  // Limpiar el input y devolverle el foco
  inputItem.value = '';
  inputItem.focus();

  console.log('Elemento agregado:', valor);
});

// --- Limpiar toda la lista ---
document.getElementById('btnLimpiar').addEventListener('click', function () {
  miLista.innerHTML = '';
  console.log('Lista vaciada.');
});

// Permitir agregar también con la tecla Enter
inputItem.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    document.getElementById('btnAgregar').click();
  }
});

/* =========================================================
   d) Cambio de estilos
   Objetivo: definir una función y modificar
   elemento.style.backgroundColor desde un atributo onclick.
   ========================================================= */
function cambiarFondo(color) {
  const seccion = document.getElementById('sec-estilos');
  seccion.style.backgroundColor = '#' + color;
  console.log('Fondo de la sección d cambiado a: #' + color);
}