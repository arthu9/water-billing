var table = new Tabulator("#dashboard-table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
 	height:311, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Date (Month/Day/Year)", field:"date", align:"center", sorter:"date", sorterParams:{format:"MM/DD/YYYY"}},
	 	{title:"Due (Month/Day/Year)", field:"due_date", align:"center", sorter:"date", sorterParams:{format:"MM/DD/YYYY"}},
 	],
    rowClick: function (e, row) { //trigger an alert message when the row is clicked
        $('span#month').text(moment(row.getData().date, 'MM-DD-YYYY').format('MMMM DD[,] YYYY'));
        $('span#due').text(moment(row.getData().due_date, 'MM-DD-YYYY').format('MMMM DD[,] YYYY'));
        $('span#reading').text(row.getData().reading);
        $('span#cubicM').text(row.getData().cubic_meters);
        $('span#amount').text('₱' + row.getData().amount);
        console.log(row.getData().status);
        if (row.getData().status === 'Unpaid') {
            $('span#warnings').remove();
            $('span#stat').append("<span id='warnings' class='text-warning'>" + row.getData().status + "</span>");
        }
        else if (row.getData().status === 'Paid') {
            $('span#warnings').remove();
            $('span#stat').append("<span id='warnings' class='text-success'>" + row.getData().status + "</span>");
        }
        else if (row.getData().status === 'Disconnection') {
            $('span#warnings').remove();
            $('span#stat').append("<span id='warnings' class='text-danger'>" + row.getData().status + "</span>");
        }
        else {
            $('span#warnings').remove();
            console.log("not set")
        }


    },
});
table.setData('http://localhost:8080/bill/' + curuser);