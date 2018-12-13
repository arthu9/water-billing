var printIcon = function (cell, formatterParams, onRendered) { //plain text value
    var cur_id = cell.getRow().getData().id;
    return '<a id="dis_' + cur_id + '"><span id="dis_' + cur_id + '" style="cursor:pointer" class="badge badge-pill badge-primary">Submit</span ></a>';
    };

var table = new Tabulator("#example-table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
    height: 300,
    selectable: false,
    responsiveLayout:"hide",
    groupBy:function(data){
        console.log(data);
        return moment(data.issued, 'MM-DD-YYYY').format('MMMM DD[,] YYYY');;
    },
    columns: [
        {title: "Lastname", field: "lastname", width: 170, align:"center"},
        {title: "Firstame", field: "firstname", width: 170, align:"center"},
        {title: "Previous Bill Issued", field: "issued", width: 200, align:"center", sorter:"date", sorterParams:{format:"MM/DD/YYYY"}, formatter:"datetime", formatterParams:{inputFormat:"MM/DD/YYYY", outputFormat:"MMMM DD[,] YYYY"}},
        {title: "Previous Reading", field: "prev_reading", width: 170, selectable: true, align:"center"},
        {title: "New Reading", field: "cur_reading", width:170, sorter: "number", align: "center", editor: "input"},
        {
            formatter: printIcon, width: 100, align: "center", cellClick: function (e, cell) {
                var cur_date = $('input#cur_date').val();
                var cur_rate = $('input#cur_rate').val();
                var table_val = cell.getRow().getData().cur_reading;
                var user_id = cell.getRow().getData().id;
                var delimiter = $("span#dis_"+user_id).text();
                console.log(delimiter);

                if (delimiter !== 'Submit'){
                    console.log('FUCK!')
                }
                else if ((cur_date === undefined) || (cur_date === "")) {
                    alert('please select current date')
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
                        else {
                            if (/^\d+$/.test(table_val) === false) {
                                alert("Invalid Input");
                            }
                            else {
                                call_ajax(cur_date, cur_rate, table_val, user_id);
                            }
                        }
                    }
                }
            }
        }
    ],
});

function call_ajax(cur_date, cur_rate, table_val, user_id) {
    console.log('was here');
    $.ajax
    ({
        url: "http://localhost:8080/billing",
        contentType: 'application/json; charset=utf-8',
        data: JSON.stringify({
            'cur_user': user_id,
            'cur_date': cur_date,
            'reading': table_val,
            'rate': cur_rate
        }),
        type: "POST",
        dataType: "json",
        error: function (e) {
        },
        success: function (resp) {
            if (resp.status === 'ok') {
                $("a#dis_"+user_id).replaceWith('Submitted');
                alert("Successfully Added!");
            }
            else {
                console.log("Error" + resp.message);
            }
        }
    });
}

table.setData('http://localhost:8080/users');
