const pagos = [];
const users = [];
const lista = document.getElementById("lista");
const resultado = document.getElementById("total");
const user = document.getElementById("name");
const pay = document.getElementById("pay");

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

pay.addEventListener("keypress", function (dividir) {
  if (dividir.key === "Enter") {
    document.getElementById("boton").click();
  }
});
