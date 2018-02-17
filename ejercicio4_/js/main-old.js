$(function() {
    //var elCalificacion1 = $(calificaciones[0]);
    /*
    Método .text()
    Cuando no se pasan parámetros, el método devuelve el texto
    que contiene el elemento HTML. p.ej.:
    
    console.log(elCalificacion1.text());
    
    Cuando se pasa un parámetro, éste valor reemplaza al texto
    que contiene el elemento HTML. p.ej.:
    
    elCalificacion1.text('Otro valor');
    */

    var promedio = $('#promedio');
    var calificaciones = $('.calificacion');
    var sumaCalificaciones = 0;
    var colorPromedio;
    var listaColores = {
        mal: '#f00',
        regular: '#f90',
        bien: '#9d0',
    }

    for(var i = 0; i< calificaciones.length; i++) {
        var calificacionActual = $(calificaciones[i]).text();
        var parseCalificacionActual = parseInt(calificacionActual, 10);
        //sumaCalificaciones = sumaCalificaciones + parseCalificacionActual;
        sumaCalificaciones += parseCalificacionActual;
    }

    var resultado = sumaCalificaciones / calificaciones.length;
    var fixedResultado = resultado.toFixed(2);

    if (fixedResultado < 5.9) {
        //colorPromedio = listaColores.mal;
        colorPromedio = 'bad';
    } else if (fixedResultado < 7.9) {
        //colorPromedio = listaColores.regular;
        colorPromedio = 'regular';
    } else {
        //colorPromedio = listaColores.bien;
        colorPromedio = 'good';
    }

    /*
    promedio.css({
        backgroundColor: colorPromedio
    });
    */
    promedio.addClass(colorPromedio);
    promedio.text(fixedResultado);
});