const prefixWage = [2.0, 2.5, 3.0];
$('.calculate').on('click', function(e) {
    let total = 0;
    let index = 0;
    $('input[name^="hours"]').each(function() {
        total += parseFloat($(this).val()) * prefixWage[index++];
    });
    $('#result').text(total);
})