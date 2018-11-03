var table = new Tabulator("#dashboard-table", {
        height:500, 
        responsiveLayout:"hide", 
        layout:"fitColumns",
        columns:[
          {
            title:"MONTH",
            field:"month", 
            align:"center",
            width:700,
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



      ]

      table.setData(tabledata);