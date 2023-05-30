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
	console.log(inputPresupuesto.value)
	document.getElementById("totalPresupuesto").innerHTML = `CLP: ${presupuesto}`

})

function agregar(){
	
	valormas = inputPresupuesto.value

	document.getElementById("clpabono").innerHTML = valormas
}

function gasto(){
	valormas = inputPresupuesto.value

	document.getElementById("clpgastos").innerHTML = valormas
}


let balance = document.getElementById("presupuesto")
inputPresupuesto.addEventListener('keyup', function () {
	let a = parseFloat( document.getElementById("clpabono"))
	let g = parseFloat( 	document.getElementById("clpgastos"))
	let total = 0
	total = a - g
	console.log(total)
	document.getElementById("balance").innerHTML = `CLP: ${total}`
})
