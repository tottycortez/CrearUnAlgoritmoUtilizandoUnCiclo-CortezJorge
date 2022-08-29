let crearUsuario = prompt("Cree su Usuario:")
console.log(crearUsuario)
let crearContraseña = Number(prompt("Cree su Contraseña NUMERICA:"))
console.log(crearContraseña)

let usuario = prompt("Ingrese su Usuario:")
while (usuario != crearUsuario) {
    usuario = prompt("Ingrese su Usuario por favor!!!")
}
alert("Usuario correcto!")

let contraseña = prompt(`Ingrese la Contraseña de ${usuario} :`)
while (contraseña != crearContraseña) {
    contraseña = prompt(`${usuario}, Ingrese su Contraseña por favor!!!`)
}
alert("Contraseña correcta!!")
alert(`Bienvenido/a ${usuario}!!!`)