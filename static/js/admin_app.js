var printIcon = function (cell, formatterParams, onRendered) { //plain text value
    return '<button id="forsubmit" data-toggle="popover" type="button" class="btn btn-primary">Submit</button>';
};

var table = new Tabulator("#example-table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
    height: 311, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
    width: 50,
    responsiveLayout: "hide",
    layout: "fitColumns", //fit columns to width of table (optional)
    columns: [ //Define Table Columns
        {title: "Lastname", field: "lastname", width: 180},
        {title: "Firstame", field: "firstname", width: 180},
        {title: "Curret Reading", field: "cur_reading", width: 180, sorter: "number", align: "center", editor: "input"},
        {
            formatter: printIcon, width: 100, align: "center", cellClick: function (e, cell) {
                var cur_date = $('input#datepicker').val();
                var due_date = $('input#datepicker2').val();
                var cur_rate = $('input#cur_rate').val();
                var table_val = cell.getRow().getData().cur_reading;
                var user_id = cell.getRow().getData().id;

                if ((cur_date === undefined) || (cur_date === "")) {
                    alert('please select current date')
                }
                else {
                    if ((due_date === undefined) || (due_date === "")) {
                        alert('please select due date')
                    }
                    else {
                        if ((cur_rate === undefined) || (cur_rate === "")) {
                            alert('please select Cubic Meter rate')
                        }
                        else {
                            if ((table_val === undefined) || (table_val === "")) {
                                $('button#forsubmit').attr("disabled", true);
                                alert("Please Enter Data");
                            }
                            else if (/^\d+$/.test(table_val) === false) {
                                alert("Invalid Input");
                            }
                            else {
                                call_ajax(cur_date, due_date, cur_rate, table_val, user_id);
                            }
                        }
                    }
                }
            }
        }
    ],
});

function call_ajax(cur_date, due_date, cur_rate, table_val, user_id) {
    console.log('was here')
    $.ajax
    ({
        url: "http://localhost:8080/billing",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'cur_user': user_id,
            'cur_date': cur_date,
            'due_date': due_date,
            'reading': table_val,
            'rate': cur_rate
        }),
        type: "POST",
        dataType: "json",
        error: function (e) {
        },
        success: function (resp) {
            if (resp.status === 'ok') {
                alert("Successfully Added!");
            }
            else {
                console.log("Error" + resp.message);
            }
        }
    });
}

table.setData('http://localhost:8080/users');

$('#datepicker').datepicker({
    uiLibrary: 'bootstrap4'
});
$('#datepicker2').datepicker({
    uiLibrary: 'bootstrap4'
});