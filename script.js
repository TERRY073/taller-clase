// 1 Calcular el total de la compra
let p1 = parseFloat(prompt("Precio del producto 1:"));
let p2 = parseFloat(prompt("Precio del producto 2:"));
let p3 = parseFloat(prompt("Precio del producto 3:"));
console.log("Total a pagar: $" + (p1 + p2 + p3));

// 2 Área de una pared (banner)
let ancho = parseFloat(prompt("Ancho de la pared (m):"));
let alto = parseFloat(prompt("Alto de la pared (m):"));
console.log("Área total: " + (ancho * alto) + " m²");

// 3️Perímetro del potrero
let largo = parseFloat(prompt("Largo del potrero (m):"));
let anchoP = parseFloat(prompt("Ancho del potrero (m):"));
console.log("Perímetro del potrero: " + (2 * (largo + anchoP)) + " m");

// 4️ Convertir °F a °C
let tempF = parseFloat(prompt("Temperatura en °F:"));
let tempC = (tempF - 32) * 5/9;
console.log("Temperatura en °C: " + tempC.toFixed(2));

