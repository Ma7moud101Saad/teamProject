// $.ajax({url: "jsonFiles/deals.json", success: function(result){
//     //    alert( result.data[0].first_name);
//     $(".firstCol").html("<div>")
    
//     for(var i = 0; i<3; i++)
//     {
//         $(".firstCol").append(
//         "<p><img src='"+result.data[i].avatar+"'><p>"+
//         "<p>"+result.data[i].last_name+"</p>"+
//         "<p>"+result.data[i].first_name+"</p>");
//     }
//     $(".firstCol").append("</div>")
//       }});
xmlhttp=new XMLHttpRequest();
xmlhttp.onreadystatechange=function()
{
if (xmlhttp.readyState==4 && xmlhttp.status==200)
{
str=xmlhttp.responseText;
var myobj = JSON.parse(str);


for(var i=0; i<18; i++)
{
    
    document.getElementById("Categories").innerHTML +="<div class='categorie'>"+
    "<img src='"+myobj.Dept.Categories.Category[i].img+"'><br>"+
    "<p id=categortyDate"+i+">"
    +myobj.Dept.Categories.Category[i].price+"</p>"+
    "<br><a href='#'>"+myobj.Dept.Categories.Category[i].save+"</a>"+
    "</div>";
   
      
    
}


}
}
xmlhttp.open("GET","jsonFiles/Json.txt",true);
xmlhttp.send();
    
