const RANGOS_INHABILITADOS = {
  Bs10: [
    [67250001, 67700000],
    [69050001, 69500000],
    [69500001, 69950000],
    [69950001, 70400000],
    [70400001, 70850000],
    [70850001, 71300000],
    [76310012, 85139995],
    [86400001, 86850000],
    [90900001, 91350000],
    [91800001, 92250000]
  ],
  Bs20: [
    [87280145, 91646549],
    [96650001, 97100000],
    [99800001, 100250000],
    [100250001, 100700000],
    [109250001, 109700000],
    [110600001, 111050000],
    [111050001, 111500000],
    [111950001, 112400000],
    [112400001, 112850000],
    [112850001, 113300000],
    [114200001, 114650000],
    [114650001, 115100000],
    [115100001, 115550000],
    [118700001, 119150000],
    [119150001, 119600000],
    [120500001, 120950000]
  ],
  Bs50: [
    [77100001, 77550000],
    [78000001, 78450000],
    [78900001, 96350000],
    [96350001, 96800000],
    [96800001, 97250000],
    [98150001, 98600000],
    [104900001, 105350000],
    [105350001, 105800000],
    [106700001, 107150000],
    [107600001, 108050000],
    [108050001, 108500000], 
    [109400001, 109850000]
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