var table = new Tabulator("#memberTable", {
  height:500, 
  responsiveLayout:"hide", 
  layout:"fitColumns",
  columns:[
    {
      title:"Name",
      field:"name", 
      align:"center",
      sorter:"alphanum"
    },
    {
      title:"Block", 
      field:"block",  
      sorter:"number"
    },
    {
      title:"Lot",
      field:"lot",
      sorter:"number"
    }
  ],
  rowClick:function(e, row){ //trigger an alert message when the row is clicked
  alert("Row " + row.getData().id + " Clicked!!!!");
  },
});

var tabledata = [
  {
    id:1,
    name:"Arthur Annthony F. Navarro",
    block: 1,
    lot:1
  },
  {
    id:2,
    name:"Joren Pacaldo",
    block: 2,
    lot:1
  },
  {
    id:3,
    name:"Iris Ebale",
    block: 1,
    lot:2
  },
  {
    id:4,
    name:"LemonCake",
    block: 2,
    lot:2
  },
  {
    id:5,
    name:"ImongMAMA",
    block: 1,
    lot:3
  },
]

table.setData(tabledata);