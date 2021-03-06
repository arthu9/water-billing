$(document).ready(function () {
    $("nav#navbarnoti").hide();
    $("nav#navbarnoti").attr('hidden', false);
});

$(document).on('change', '#date_selection', function () {
    let date_selected = $('#date_selection option:selected').text();
    table.setData('http://localhost:8080/bill/date/' + date_selected);
});

function send_all() {
    $.ajax
    ({
        url: "http://localhost:8080/sms/all",
        contentType: 'application/json; charset=utf-8',
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("button#buttonforall").attr("disabled", true)
        },
        complete: function () {
            $("button#buttonforall").attr("disabled", false)
        },
        error: function (e) {
            console.log(e)
        },
        success: function (resp) {
            if (resp.status === 'ok'){
                $("nav#navbarnoti").slideDown(1000);
                setTimeout(function () {
                    $("nav#navbarnoti").slideUp(1000);
                }, 4000)
            }
            else{
                alert('Something went wrong')
            }
        }
    });
}

function send_date() {
    let bill_date = $('#selection_date option:selected').text();
    console.log
    $.ajax
    ({
        url: "http://localhost:8080/sms/date",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            "bill_date": bill_date
        }),
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("button#buttonfordate").attr("disabled", true)
        },
        complete: function () {
            $("button#buttonfordate").attr("disabled", false)
        },
        error: function (e) {
            console.log(e)
        },
        success: function (resp) {
            if (resp.status === 'ok'){
                $("nav#navbarnoti").slideDown(1000);
                setTimeout(function () {
                    $("nav#navbarnoti").slideUp(1000);
                }, 4000)
            }
            else{
                alert('Something went wrong')
            }
        }
    });
}

function send_announcement() {
    let announcement = $('textarea#msg_txtarea').val();
    $.ajax
    ({
        url: "http://localhost:8080/sms/announcement",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            "announ": announcement,
        }),
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("button#buttonforannoun").attr("disabled", true)
        },
        complete: function () {
            $("button#buttonforannoun").attr("disabled", false)
        },
        error: function (e) {
        },
        success: function (resp) {
            if (resp.status === 'ok'){
                $("nav#navbarnoti").slideDown(1000);
                setTimeout(function () {
                    $("nav#navbarnoti").slideUp(1000);
                }, 4000)
            }
            else{
                alert('Something went wrong')
            }
        }
    });
}

function send_disconnection() {
    $.ajax
    ({
        url: "http://localhost:8080/sms/disconnection",
        contentType: 'application/json; charset=utf-8',
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("button#buttonfordisconnection").attr("disabled", true)
        },
        complete: function () {
            $("button#buttonfordisconnection").attr("disabled", false)
        },
        error: function (e) {
            console.log(e)
        },
        success: function (resp) {
            if (resp.status === 'ok'){
                $("nav#navbarnoti").slideDown(1000);
                setTimeout(function () {
                    $("nav#navbarnoti").slideUp(1000);
                }, 4000)
            }
            else{
                alert('Something went wrong')
            }
        }
    });
}