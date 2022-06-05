const pagos = [];
const users = [];
const lista = document.getElementById("lista");
const resultado = document.getElementById("total");
const user = document.getElementById("name");
const pay = document.getElementById("pay");
const consulta = document.getElementById("consultaUser");
const consultaResult = document.getElementById("userGasto");

function dividir() {
  agregarPago();
  actualizarLista();
  pagoIndividual();
}

function agregarPago() {
  if (users.includes(user.value)) {
    for (let i = 0; i < users.length; i++) {
      if (users[i] === user.value) {
        pagos[i] = Number(pagos[i]) + Number(pay.value);
      }
    }
  } else {
    users.push(user.value);
    pagos.push(pay.value);
  }
}

function actualizarLista() {
  const li = document.createElement("li");
  const text = document.createTextNode(user.value + " gastó $" + pay.value);
  li.classList.add("list-group-item");
  if (lista.lastChild) {
    lista.removeChild(lista.lastChild);
  }
  li.appendChild(text);
  lista.appendChild(li);
}

function pagoIndividual() {
  let suma = 0;
  for (let pago of pagos) {
    suma += Number(pago);
  }
  const pagoInd = Math.ceil(suma / users.length);
  resultado.innerText = `Total: $${suma}
                        A cada uno le toca aportar: $${pagoInd}`;
}

function miGasto() {
  if (users.includes(consulta.value)) {
    for (let i = 0; i < users.length; i++) {
      if (users[i] == consulta.value) {
        consultaResult.innerText = consulta.value + " gastó: $" + pagos[i];
      }
    }
  } else alert("Usuario no encontrado");
}

pay.addEventListener("keypress", function (dividir) {
  if (dividir.key === "Enter") {
    document.getElementById("boton").click();
  }
});

consulta.addEventListener("keypress", function (miGasto) {
  if (miGasto.key === "Enter") {
    document.getElementById("botonConsulta").click();
  }
});
