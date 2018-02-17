$(function () {
    //Here code ...
    var elHeight = $('#height');
    var elWeight = $('#weight');
    var elCalculate = $('#calculate');
    var elResult = $('#result');


    elCalculate.on('click', function () {
        var valHeight = parseFloat(elHeight.val());
        var valWeight = parseFloat(elWeight.val());
        var result = valWeight / (valHeight * 2);
        elResult.text('La masa muscular es de :' + result);

    })

});