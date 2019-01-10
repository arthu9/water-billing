function settings_name(){
    let firstname = $('input#firstname').val();
    let lastname = $('input#lastname').val();
    $.ajax
    ({
        url: "http://localhost:8080/account/update/name",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'acc_id': curuser,
            'firstname': firstname,
            'lastname': lastname
        }),
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("button#name_button").attr("disabled", true)
        },
        complete: function () {
            $("button#name_button").attr("disabled", false);
        },
        error: function (e) {
        },
        success: function (resp) {
            if (resp.status === 'ok') {
                alert("Successfully Updated");
            } else {
                console.log("Error " + resp.message);
            }
        }
    })
}

function setting_mobile(){
    let mobile_num = $('input#mobile_num').val();
    $.ajax
    ({
        url: "http://localhost:8080/account/update/mobile",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'acc_id': curuser,
            'mobile_num': mobile_num
        }),
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("button#mobile_button").attr("disabled", true)
        },
        complete: function () {
            $("button#mobile_button").attr("disabled", false);
        },
        error: function (e) {
        },
        success: function (resp) {
            if (resp.status === 'ok') {
                alert("Successfully Updated");
            } else {
                console.log("Error " + resp.message);
            }
        }
    })
}

function settings_password(){
    let new_pass = $('input#new_pass').val();
    $.ajax
    ({
        url: "http://localhost:8080/account/update/password",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'acc_id': curuser,
            'password': new_pass
        }),
        type: "POST",
        dataType: "json",
        beforeSend: function () {
            $("button#pass_button").attr("disabled", true)
        },
        complete: function () {
            $("button#pass_button").attr("disabled", false);
        },
        error: function (e) {
        },
        success: function (resp) {
            if (resp.status === 'ok') {
                alert("Successfully Updated");
            } else {
                console.log("Error " + resp.message);
            }
        }
    })
}