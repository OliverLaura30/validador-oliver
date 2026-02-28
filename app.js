const RANGOS_INHABILITADOS = {
  Bs10: [
    [67250001, 67700000],
    [76310012, 85139995]
  ],
  Bs20: [
    [87280145, 91646549]
  ],
  Bs50: [
    [78900001, 96350000]
  ]
};

function esBilleteValido(numero, corte) {
  const rangos = RANGOS_INHABILITADOS[corte];
  for (const [inicio, fin] of rangos) {
    if (numero >= inicio && numero <= fin) {
      return false;
    }
  }
  return true;
}

function validar() {
  const numero = parseInt(document.getElementById("serie").value);
  const corte = document.getElementById("corte").value;
  const resultado = document.getElementById("resultado");

  if (isNaN(numero)) {
    resultado.textContent = "Número inválido";
    resultado.style.color = "orange";
    return;
  }

  if (esBilleteValido(numero, corte)) {
    resultado.textContent = "✅ BILLETE VÁLIDO";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "❌ BILLETE INVÁLIDO";
    resultado.style.color = "red";
  }
}

/* Registrar Service Worker */
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}