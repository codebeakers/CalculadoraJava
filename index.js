// alert("Hola como estas?");

function limpiar(){
    document.getElementsById('miFormulario').reset();
}

function sumar  () { 
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);
    document.getElementById('el-resultado').innerHTML = x+y;
}

function restar  () { 
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);
    document.getElementById('el-resultado').innerHTML = x-y;
}

function multiplicar  () { 
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);
    document.getElementById('el-resultado').innerHTML = x*y;
}

function dividir  () { 
    var x = parseInt(document.getElementById('valor 1').value);
    var y = parseInt(document.getElementById('valor 2').value);
    document.getElementById('el-resultado').innerHTML = x/y;
}


