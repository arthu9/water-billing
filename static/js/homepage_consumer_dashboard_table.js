/*var table = new Tabulator("#dashboard-table", {
        height:311,
        responsiveLayout:"hide", 
        layout:"fitColumns",
        columns:[
          {
            title:"MONTH",
            field:"month", 
            align:"center",
            sorter:"date"
          },
          {
            title:"Due Date", 
            field:"date",  
            sorter:"date"
          }
        ],
        rowClick:function(e, row){ //trigger an alert message when the row is clicked
        alert("Row " + row.getData().id + " Clicked!!!!");
        },
      });

      var tabledata = [
		{
          id:1,
          month: "January 2019",
          date: "February 15,2019"
        },
        {
          id:2,
          month: "December 2018",
          date: "January 15,2019"
        },
        {
          id:3,
          month: "November 2018",
          date: "December 15,2018"
        },
        {
          id:4,
          month: "October 2018",
          date: "November 15,2018"
        },
        {
          id:5,
          month: "September 2018",
          date: "October 15,2018"
        },
        {
          id:13,
          month: "January 2018",
          date: "February 15,2018"
        },
        {
          id:12,
          month: "February 2018",
          date: "March 15,2018"
        },
        {
          id:11,
          month: "March 2018",
          date: "April 15,2018"
        },
        {
          id:10,
          month: "April 2018",
          date: "May 15,2018"
        },
        {
          id:9,
          month: "May 2018",
          date: "June 15,2018"
        },
        {
          id:8,
          month: "June 2018",
          date: "July 15,2018"
        },
        {
          id:7,
          month: "July 2018",
          date: "August 15,2018"
        },
        {
          id:6,
          month: "August 2018",
          date: "September 15,2018"
        },
      ];*/

var table = new Tabulator("#dashboard-table", {
        ajaxResponse:function(url, params, response){
        return response.entries;
    },
 	height:311, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
 	layout:"fitColumns", //fit columns to width of table (optional)
 	columns:[ //Define Table Columns
	 	{title:"Date (Month/Day/Year)", field:"date", align:"center", sorter:"date", sorterParams:{format:"MM/DD/YYYY"}},
	 	{title:"Due (Month/Day/Year)", field:"due_date", align:"center", sorter:"date", sorterParams:{format:"MM/DD/YYYY"}},
 	],
 	rowClick:function(e, row){ //trigger an alert message when the row is clicked
          $('span#month').text(moment(row.getData().date, 'MM-DD-YYYY').format('MMMM DD[,] YYYY'));
          $('span#due').text(moment(row.getData().due_date, 'MM-DD-YYYY').format('MMMM DD[,] YYYY'));
          $('span#reading').text(row.getData().reading);
          $('span#cubicM').text(row.getData().cubic_meters);
          $('span#amount').text('₱'+row.getData().amount);
          console.log(row.getData().status);
          if (row.getData().status === 'Unpaid'){
              $('span#warnings').remove();
              $('span#stat').append("<span id='warnings' class='text-warning'>"+row.getData().status+"</span>");
          }
          else if (row.getData().status === 'Paid'){
              $('span#warnings').remove();
              $('span#stat').append("<span id='warnings' class='text-success'>"+row.getData().status+"</span>");
          }
          else if(row.getData().status === 'Disconnection') {
              $('span#warnings').remove();
              $('span#stat').append("<span id='warnings' class='text-danger'>"+row.getData().status+"</span>");
          }
          else{
              $('span#warnings').remove();
              console.log("not set")
          }


 	},
    });
      table.setData('http://localhost:8080/bill/'+curuser);