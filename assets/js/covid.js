window.onload = function(){
    var fecha = new Date(); //Fecha actual
    var mes = fecha.getMonth()+1; //obteniendo mes
    var dia = fecha.getDate(); //obteniendo dia
    var ano = fecha.getFullYear(); //obteniendo año
    if(dia<10)
      dia='0'+dia; //agrega cero si el menor de 10
    if(mes<10)
      mes='0'+mes //agrega cero si el menor de 10
    document.getElementById('entradaFechaActual').value=ano+"-"+mes+"-"+dia;
  }
  function showContent() {
    respuestaMujer = document.getElementById("respuestaMujer");
    sexoMujer = document.getElementById("sexoMujer");

    respuestaEmbarazo = document.getElementById("respuestaEmbarazo");
    respuestaPeriodo = document.getElementById("respuestaPeriodo");
    embarazo = document.getElementById("embarazoSi");
    
    respuestaPeriodoPuerperio = document.getElementById("respuestaPeriodoPuerperio");
    periodoPuerperio = document.getElementById("periodoPuerperioSi");

    respuestaNacionalidad = document.getElementById("respuestaNacionalidad");
    respuestaNacionalidadFecha = document.getElementById("respuestaNacionalidadFecha");
    extranjera = document.getElementById("nacionalidadExtranjera");

    respuestaMigrante = document.getElementById("respuestaMigrante");
    migrante = document.getElementById("migranteSi");

    respuestaVisitados = document.getElementById("repuestaPaisesVisitados");
    respuestaIngreso = document.getElementById("respuestaIngresoPais");
    visitados = document.getElementById("paisesVisitadosSi");

    respuestaIndigena = document.getElementById("respuestaIndigena");
    indigena = document.getElementById("indigenaSi");
    if (sexoMujer.checked) {
        respuestaMujer.style.display='block';
    }
    else {
        respuestaMujer.style.display='none';
    }

    if (embarazo.checked) {
        respuestaEmbarazo.style.display='block';
        respuestaPeriodo.style.display='block';
    }
    else {
        respuestaEmbarazo.style.display='none';
        respuestaPeriodo.style.display='none';
    }
    if (periodoPuerperio.checked) {
        respuestaPeriodoPuerperio.style.display='block';
    }
    else {
        respuestaPeriodoPuerperio.style.display='none';
    }
    if (extranjera.checked) {
        respuestaNacionalidad.style.display='block';
        respuestaNacionalidadFecha.style.display='block';
    }
    else {
        respuestaNacionalidad.style.display='none';
        respuestaNacionalidadFecha.style.display='none';
    }
    if (migrante.checked) {
        respuestaMigrante.style.display='block';
    }
    else {
        respuestaMigrante.style.display='none';
    }
    if (visitados.checked) {
        respuestaVisitados.style.display='block';
        respuestaIngreso.style.display='block';
        console.log("!")
    }
    else {
        respuestaVisitados.style.display='none';
        respuestaIngreso.style.display='none';
        console.log("2")
    }
    if (indigena.checked) {
        respuestaIndigena.style.display='block';
    }
    else {
        respuestaIndigena.style.display='none';
    }
}