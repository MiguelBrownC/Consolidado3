let gastos = []

let total = 0
let inputPresupuesto = document.getElementById("presupuesto")
inputPresupuesto.addEventListener('keyup', function () {
	let presupuesto = inputPresupuesto.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	inputPresupuesto.value = presupuesto
	prueba = inputPresupuesto.value.replace(/\D/g, "")
	document.getElementById("totalPresupuesto").innerHTML = `CLP: ${presupuesto}`
})

function agregar() {
	valormas = inputPresupuesto.value
	prueba = valormas.replace(/\D/g, "")
	document.getElementById("clpabono").innerHTML = prueba
	action()
}

function eliminarGasto(id) {
	gastos = gastos.filter(item => item.id !== id)
	imprimirGastos()
}

function imprimirGastos() {
	let divGastos = document.getElementById("gastosTable")
	let html = ''
	gastos.forEach(gasto => {
		html += `
		<tr>
		<td>${gasto.id}</td>
		<td>${gasto.nombre}</td>
		<td>${gasto.monto}</td>
		<td><button class="btn btn-danger" onclick="eliminarGasto(${gasto.id})">Borrar</button></td>
	  </tr>
		`
	})
	divGastos.innerHTML = html
	action()
}

function gasto() {
	let nombre = document.getElementById("nombreGasto").value
	let monto = document.getElementById("montoGasto").value
	gastos.push({ id: gastos.length + 1, nombre: nombre, monto: monto })
	imprimirGastos()
}

// function gasto(){
// 	valormenos = inputPresupuesto.value
// 	prueba2=valormenos.replace(/\D/g, "")
// 	document.getElementById("clpgastos").innerHTML = prueba2
// 	action()
// }

function action() {
	let totalGastos = gastos.reduce((acumulador, valorActual) => acumulador + parseFloat(valorActual.monto), 0)
	document.getElementById("clpgastos").innerHTML = totalGastos
	console.log(totalGastos)
	let aa = 0.0
	let a = document.getElementById("clpabono")
	aa = parseFloat(a.textContent)
	let gg = 0
	let g = document.getElementById("clpgastos")
	gg = parseFloat(g.textContent)
	total = aa - totalGastos
	console.log(total)
	document.getElementById("balance").innerHTML = total
}

// let balance = document.getElementById("presupuesto")
// inputPresupuesto.addEventListener('keyup', function () {
// 	let a = parseFloat( document.getElementById("clpabono"))
// 	let g = parseFloat( 	document.getElementById("clpgastos"))
// 	let total = 0
// 	total = a - g
// let balance = document.getElementById("presupuesto")
// inputPresupuesto.addEventListener('keyup', function () {
// 	let a = parseFloat( document.getElementById("clpabono"))
// 	let g = parseFloat( 	document.getElementById("clpgastos"))
// 	let total = 0
// 	total = a - g
// 	console.log(total)
// 	document.getElementById("balance").innerHTML = `CLP: ${total}`
// })
// 	console.log(total)
// 	document.getElementById("balance").innerHTML = `CLP: ${total}`
// })
