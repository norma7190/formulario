document.getElementById('mostrar').addEventListener('click', function() {
    // obtener los valores del formulario
    let nombre = document.getElementById('nombre').value;
    let apellidos = document.getElementById('apellidos').value;
    let dni = document.getElementById('dni').value;
    let edad = document.getElementById('edad').value;
    let direccion = document.getElementById('direccion').value;
    let correo = document.getElementById('correo').value;
    let genero = ''; // inicializa genero vacio

    // verificar cual genero est aseleccionado
    if (document.getElementById('genero_m').checked) {
        genero = 'masculino';
    } else if (document.getElementById('genero_f').checked) {
        genero = 'femenino';
    }

    let fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    let telefono = document.getElementById('telefono').value;
    let lugar = document.getElementById('lugar').value;

    // verificar si todos los campos están llenos
    if (!nombre || !apellidos || !dni || !edad || !direccion || !correo || !genero || !fecha_nacimiento || !telefono || !lugar) {
        alert("por favor complete todos los campos."); // alerta si falta algun campo
        return;
    }

    // mostrar los datos en la tabla
    let tablaBody = document.getElementById('tabla_body'); // obtiene el cuerpo de la tabla
    let fila = document.createElement('tr'); // crea una nueva fila
    fila.innerHTML = `
        <td>${nombre}</td>
        <td>${apellidos}</td>
        <td>${dni}</td>
        <td>${edad}</td>
        <td>${direccion}</td>
        <td>${correo}</td>
        <td>${genero}</td>
        <td>${fecha_nacimiento}</td>
        <td>${telefono}</td>
        <td>${lugar}</td>
    `; // llena la fila con los datos del formulario
    tablaBody.appendChild(fila); // añade la fila a la tabla

    // mostrar en consola los valores
    console.log("datos registrados:");
    console.log("nombre:", nombre);
    console.log("apellidos:", apellidos);
    console.log("dni:", dni);
    console.log("edad:", edad);
    console.log("direccion:", direccion);
    console.log("correo:", correo);
    console.log("genero:", genero);
    console.log("fecha de nacimiento:", fecha_nacimiento);
    console.log("telefono:", telefono);
    console.log("lugar:", lugar);
});

document.getElementById('limpiar').addEventListener('click', function() {
    // limpiar todos los campos del formulario
    document.getElementById('formulario').reset(); // resetea el formulario
    console.log("formulario limpiado."); // muestra mensaje en consola
});
