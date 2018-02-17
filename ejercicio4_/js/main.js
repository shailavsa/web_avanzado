$(function () {
    var getAverage = function (scores) {
        ;
        var _scores = scores || [];
        var _scoresLength = _scores.length;
        var _total = 0;

        for (var i = 0; i < _scoresLength; i++) {
            var currentScore = $(_scores[i]).text();
            var parseCurrentScore = parseInt(currentScore, 10);
            _total += parseCurrentScore;

        }

        _average = _total / _scoresLength;
        return _average.toFixed(2);
    };

    var getColor = function (average) {
        var _average = average || 0;    
        var _color;
        if (_average < 5.9) {
            _color = 'bad';
        } else if (_average < 7.9) {
            _color = 'regular';
        } else {
            _color = 'good';
        }
        return _color;

    };
    // @variables 
    var elScores = $('.calificacion');
    var elAverage = $('#promedio');

    var valAverage = getAverage(elScores);
    var varColor = getColor(valAverage);

    elAverage.addClass(varColor);
    elAverage.text(valAverage);
});
