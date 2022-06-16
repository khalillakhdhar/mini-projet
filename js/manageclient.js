var table=[];
function adddata()
{
    done=document.getElementById("client").value;
    table.push(done);
    console.log(table);
    loadTable();
    document.getElementById("client").value="";
}
function deleteall()
{
    table=[];
    loadTable();

}
function annuler()
{
    table.pop();
    loadTable();
}
function loadTable()
{
    
    var datas="<ul>";
        for(let u of table){
           datas+="<li class='list-group-item'>"+u+"</li>";
       };
       datas+="</ul>";
       console.log(datas);
       document.getElementById("ls").innerHTML=datas;
       
}
