$(function () {
    //Here code ...
    var elHeight = $('#height'),
        elWeight = $('#weight'),
        elReset = $('#reset');
        elCalculate = $('#calculate'),
        elResult = $('#result');
    //funciones
    var validateInput = function (element) {
        var valElement = element.val().trim();

        if (valElement != '') {
            element.removeClass('error');
            return valElement;
        }
        else {
            element.addClass('error');
            return false;
        }
    };

    elCalculate.on('click', function () {
        var valHeight = validateInput(elHeight);
        var valWeight = validateInput(elWeight);
        elSpan = document.createElement('span'),
        elStrong = document.createElement('strong');

        elResult.empty();

        
        /* si el valor de la variable es igual:
        
        -false
        -null
        -undefined 
        devolvera "False"en caso contrario devolvera  "true"
        Esto es conocidacomo valores "Falsy"
        */
       
       if (valHeight && valWeight) {
           var result = parseFloat(valWeight) / (parseFloat(valHeight) / 2);

            $(elSpan).text('La masa muscular es de: ');
            $(elStrong).text(result.toFixed(2));

            elResult.append(elSpan, elStrong);
        }
        else {
            $(elSpan).text('Necesitas ingresar tu peso y altura');
            elResult.append(elSpan);
        }
    });

    elReset.on('click', function (){
        elResult.empty();
        elHeight.removeClass('error');
        elWeight.removeClass('error');
    });
});