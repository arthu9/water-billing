let table1 = new Tabulator("#paid_table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
    height: 311,
    responsiveLayout: "hide",
    layout: "fitColumns",
    columns: [
        {title: "Last name", field: "lastname", align: "center"},
        {title: "First name", field: "firstname"},
        {title: "Reading", field: "reading"},
        {title: "Amount", field: "amount"}
    ]
});

let table2 = new Tabulator("#unpaid_table", {
    ajaxResponse: function (url, params, response) {
        return response.entries;
    },
    height: 311,
    responsiveLayout: "hide",
    layout: "fitColumns",
    columns: [
        {title: "Last name", field: "lastname", align: "center"},
        {title: "First name", field: "firstname"},
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
    layout: "fitColumns",
    columns: [
        {title: "Last name", field: "lastname", align: "center"},
        {title: "First name", field: "firstname"},
        {title: "Reading", field: "reading"},
        {title: "Amount", field: "amount"}
    ]
});

table1.setData('http://localhost:8080/viewpaid/paid');
table2.setData('http://localhost:8080/viewpaid/unpaid');
table3.setData('http://localhost:8080/viewpaid/Disconnected')
