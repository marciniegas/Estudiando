/*ponere al final*/
variable.push("");

/*quitar el final*/

variable.pop();

/*poner al inicio*/

variable.unshift("");

/*quitar el inicio*/
variable.shift();

// Métodos de recorridos de Arrays

var articulos = [
    {nombre: "Bici", costo:3000},
    {nombre: "Tv", costo:2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},
    {nombre: "Laptop", costo:20000},
    {nombre: "teclado", costo:500},
    {nombre: "Audifonos", costo:1700},
];

//generar nuevo array para mostrar lo filtrado #METODO 1 filter()

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo<=500
});


//generar nuevo array para mostrar lo filtrado #METODO 2 map()

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//generar nuevo array para mostrar lo encontrado #METODO 3 find()

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

//no generar nuevo array, solo muestra lo encontrado #METODO 3 forEach()

articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});

//no generar nuevo array, solo muestra lo validado (true/false) #METODO 3 some()

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
})