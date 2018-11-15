let table = new Tabulator("#memberTable", {
          ajaxResponse:function(url, params, response){
        return response.entries;
    },
  height:311,
  responsiveLayout:"hide", 
  layout:"fitColumns",
  columns:[
    {title:"Last name", field:"lastname", align:"center"},
    {title:"First name", field:"firstname"},
    {title:"Address", field:"address"}
  ],
  rowClick:function(e, row){ //trigger an alert message when the row is clicked
  alert("Row " + row.getData().id + " Clicked!!!!");
  },
});

let tabledata = [
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
];


function search(){
    let search_name = $('input#testme1').val();
    let replaced = search_name.split(' ').join('%');
    let final_val = '%'+replaced+'%';
    table.setData('http://localhost:8080/search/'+final_val);
}
