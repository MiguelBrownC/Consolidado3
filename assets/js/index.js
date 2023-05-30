const productos = [
	{
		id: 1,
		nombre: "abono",
		color: "green",
		precio: 0.
	},
	{
		id: 2,
		nombre: "Gastos",
		color: "red",
		precio: 0.
	},


]



let inputPresupuesto = document.getElementById("presupuesto")
inputPresupuesto.addEventListener('keyup', function () {
	let presupuesto = inputPresupuesto.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
	inputPresupuesto.value = presupuesto
	prueba=inputPresupuesto.value.replace(/\D/g, "")
	// console.log(inputPresupuesto.value)
	// console.log(prueba)
	document.getElementById("totalPresupuesto").innerHTML = `CLP: ${presupuesto}`

})

function agregar(){
	
	valormas = inputPresupuesto.value
	prueba=valormas.replace(/\D/g, "")

	document.getElementById("clpabono").innerHTML = prueba

	action()
}

function gasto(){
	valormenos = inputPresupuesto.value
	prueba2=valormenos.replace(/\D/g, "")
	document.getElementById("clpgastos").innerHTML = prueba2
	action()
}

function action(){
	let aa=0
	let a = document.getElementById("clpabono")
	aa = parseFloat(a)
	console.log(a)
	let gg = 0
	let g = document.getElementById("clpgastos")
	gg=parseFloat(g)
	let total = 0
	total = aa - gg
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
