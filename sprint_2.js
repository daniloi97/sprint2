const payments = [];

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
  payments.push({
    name: user.value,
    pago: pay.value,
    fecha: new Date().toLocaleString(),
  });
}

function actualizarLista() {
  const li = document.createElement("li");
  const ultimoPago = payments[payments.length - 1];
  const text = document.createTextNode(
    `${ultimoPago.name} gastó $${ultimoPago.pago} Fecha: ${ultimoPago.fecha}`
  );
  li.classList.add("list-group-item");
  li.appendChild(text);
  lista.appendChild(li);
}

function pagoIndividual() {
  let suma = 0;
  for (let p of payments) {
    suma += Number(p.pago);
  }
  const pagoInd = Math.ceil(suma / payments.length);
  resultado.innerText = `Total: $${suma}
                        A cada uno le toca aportar: $${pagoInd}`;
}

pay.addEventListener("keypress", function (dividir) {
  if (dividir.key === "Enter") {
    document.getElementById("boton").click();
  }
});
