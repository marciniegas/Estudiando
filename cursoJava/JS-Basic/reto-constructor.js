
function auto(marca, modelo, version) {
    this.marca = marca;
    this.modelo = modelo;
    this.version = version;
}

var marcas =["BMW", "CHV", "DUMI", "CHATARR"];
var modelos = ["MOD X", "MOD Y", "MOD Z"];
var annio = [2000, 2005, 2015];
var lista=[];
for(var i=0; i<4; i++) {
    for(var j=0; j<3; j++){
        for(var k=0; k<3; k++){

            var autoNuevo = new auto (marcas[i], modelos[j], annio[k])
            lista.push(autoNuevo);
            if (lista.length>30){
                lista.pop();
            }
        }
    }
}

