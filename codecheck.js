$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();
        $('.response').text('Submitting...');
        
        var values = $(this).serializeArray();
        values.push({name: 'type',
                     value: 'html'});
        console.log(values);
        
        $.ajax({
            url: 'http://54.172.162.52:9000/checkJsonp',
            dataType: 'jsonp',
            contentType: 'application/json',
            jsonp: "callback",
            data: values,
            success: function (data) {
                $('.response').text('');
                $('.response').append(data['report']);
            }
        })
    });
});
