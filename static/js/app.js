$(document).ready(function () {
    $("nav#navbarnoti").hide();
    $("nav#navbarnoti").attr('hidden', false);
});

function login() {
    const username = $('input#username').val();
    const password = $('input#password').val();
    console.log('was here');
    $.ajax
    ({
        url: "http://127.0.0.1:5000/login",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'username': username,
            'password': password
        }),
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("i#load").addClass("fa fa-circle-o-notch fa-spin");
            $("button#loginButton").attr("disabled", true)
        },
        complete: function () {
            $("i#load").removeClass("fa fa-circle-o-notch fa-spin");
            $("button#loginButton").attr("disabled", false)
        },
        error: function (e) {
        },
        success: function (resp) {
            console.log('was here');
            if (resp.status === 'error') {
                $("#credentials").attr("hidden", false)
            }
            else {
                window.location.replace('/dashboard')
            }
        }
    });
}

function register() {
    const firstname = $('input#firstname').val();
    const lastname = $('input#lastname').val();
    const rusername = $('input#rusername').val();
    const password = $('input#rpassword').val();
    const address = $('input#address').val();
    const regkey = $('input#regkey').val();
    const mobile = $('input#mobile').val();
    $.ajax
    ({
        url: "http://127.0.0.1:5000/register",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'firstname': firstname,
            'lastname': lastname,
            'rusername': rusername,
            'password': password,
            'address': address,
            'regkey': regkey,
            'mobile': mobile
        }),
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("div#registrationSpinner").addClass("fa fa-circle-o-notch fa-spin");
            $("button#registerButton").attr("disabled", true)
        },
        complete: function () {
            $("div#registrationSpinner").removeClass("fa fa-circle-o-notch fa-spin");
            $("button#registerButton").attr("disabled", false)
        },
        error: function (e) {
        },
        success: function (resp) {
            if (resp.status === 'error') {
                if (resp.reason === 'Invalid Registration Key') {
                    $("input#regkey").addClass("is-invalid");
                    $("nav#navbarnoti").slideDown(1000);
                    setTimeout(function () {
                        $("nav#navbarnoti").slideUp(1000);
                    }, 4000)
                }
            }
            else {
                window.location.replace('/dashboard');
            }
        }
    });
}

function validate() {
    const input_username = $('input#rusername').val();
    if (input_username === "") {
        $("button#registerButton").attr("disabled", false);
        $("input#rusername").removeClass("is-valid");
        $("input#rusername").removeClass("is-invalid");
    }
    else {
        $.ajax
        ({
            url: "http://localhost:8080/validate",
            contentType: 'application/json; charset=utf-8',
            type: "POST",
            data: JSON.stringify({
                'username': input_username
            }),
            dataType: "json",
            beforeSend: function () {
                // $("span#span_username").text("");
                $("div#spinner").attr("hidden", false);
                $("button#registerButton").attr("disabled", true);
            },
            complete: function () {
                // $("span#span_username").text("@");
                $("div#spinner").attr("hidden", true);
            },
            error: function (e) {
            },
            success: function (resp) {
                if (resp.status === 'error') {
                    $("div#in_use").attr("hidden", false);
                    $("input#rusername").removeClass("is-valid");
                    $("input#rusername").addClass("is-invalid");
                    $("button#registerButton").attr("disabled", true);
                }
                else {
                    $("div#in_use").attr("hidden", true);
                    $("input#rusername").removeClass("is-invalid");
                    $("input#rusername").addClass("is-valid");
                    $("button#registerButton").attr("disabled", false);
                }
            }
        });
    }
}

var timeout = null;
$(document).on('keydown', '#rusername', function () {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
        validate();
    }, 300);
});

