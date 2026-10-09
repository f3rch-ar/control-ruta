

function limpiarPatente(texto) {
  return texto.trim().toUpperCase();
}

function validarPatente(patente) {
  return patente.length >= 6 && patente.length <= 7;
}

function pedirVelocidad() {
  let entrada = prompt("Ingrese la velocidad del vehículo (km/h):");
  let velocidad = Number(entrada);

  while (isNaN(velocidad) || velocidad < 0) {
    entrada = prompt("Velocidad inválida. Por favor, ingrese un número mayor o igual a 0:");
    velocidad = Number(entrada);
  }

  return velocidad;
}

function calcularMulta(velocidad) {
  const LIMITE = 110;

  if (velocidad <= LIMITE) {
    return 0;
  } else if (velocidad <= 130) {
    return 5000;
  } else {
    return 10000;
  }
}

function reporteVehiculo(patente, velocidad, monto){
  let mensajeReporte = `Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${monto}`;

  console.log(mensajeReporte);
  alert(mensajeReporte);
}

// Main Program

let inputPatente = prompt("Ingrese la patente del vehículo:");
let patente = limpiarPatente(inputPatente);

while (!validarPatente(patente)) {
  inputPatente = prompt("Patente inválida. Debe tener entre 6 y 7 caracteres. Ingrese nuevamente:");
  patente = limpiarPatente(inputPatente);
}

let velocidad = pedirVelocidad();

let montoMulta = calcularMulta(velocidad);

console.log(`Reporte: Vehículo ${patente} iba a ${velocidad} km/h. Multa: $${montoMulta}`);
reporteVehiculo(patente, velocidad, montoMulta);