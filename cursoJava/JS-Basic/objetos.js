var objeto = {
    color: "blanco",
    forma: "cuadrado",
    tamaño: "mediano"
};

objeto.color //regresa el valor de alguna propiedad del objeto


//Funcion dentro del objeto

var objeto = {
    color: "blanco",
    forma: "cuadrado",
    tamaño: "mediano",
    detalleobject: function() {
        console.log(`Objeto ${this.color} ${this.tamaño}`)
    }
};

//objeto.detalleobject(){}; //regresa el valor de alguna propiedad duncion del objeto

/* Funcion constructora */

function auto(marca, modelo, version) {
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
var autoNuevo2 = new auto("Chevrolet", "Model X", 2018);
var autoNuevo3 = new auto("BMW", "Model Y", 2007);