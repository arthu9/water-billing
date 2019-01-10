let table1 = new Tabulator("#paid_table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
    height: 311,
    responsiveLayout: "hide",
    selectable: false,
    layout: "fitColumns",
    columns: [
        {title: "Last name", field: "lastname", align: "center"},
        {title: "First name", field: "firstname"},
        {title: "Date Issued", field: "date_of_bill", sorter:"date"},
        {title: "Reading", field: "reading"},
        {title: "Amount", field: "amount"}
    ]
});

let table2 = new Tabulator("#unpaid_table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
    height: 311,
    selectable: false,
    responsiveLayout: "hide",
    layout: "fitColumns",
    columns: [
        {title: "Last name", field: "lastname", align: "center"},
        {title: "First name", field: "firstname"},
        {title: "Date Issued", field: "date_of_bill", sorter:"date"},
        {title: "Reading", field: "reading"},
        {title: "Amount", field: "amount"}
    ]
});

let table3 = new Tabulator("#disconnection_table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
    height: 311,
    responsiveLayout: "hide",
    selectable: false,
    layout: "fitColumns",
    columns: [
        {title: "Last name", field: "lastname", align: "center"},
        {title: "First name", field: "firstname"},
        {title: "Address", field: "address"},
        {title: "Amount", field: "amount"},
        {title: "# of Unpaid Bills", field: "unpaid_count"}
    ]
});

table1.setData('http://localhost:8080/viewpaid/Paid');
table2.setData('http://localhost:8080/viewpaid/Unpaid');
table3.setData('http://localhost:8080/bill/disconnection');
