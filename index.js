var oldContent1 = document.getElementById("containerparent");
var oldContent = document.getElementById("container");
var oldContent2 = document.getElementById("container2");
oldContent2.style.display="none";
var search;

function connect() {

    var searchTerm = document.getElementById("searchBox").value ;
    search=searchTerm;
    document.getElementById("searchBox").value = ""; 
    var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`; 

    fetch (url)
    .then (res=> res.json() )
    .then( data => show(data.meals))
}

function show (data) {
    console.log (data); 
    
    
   oldContent.textContent = ""; 
   
     
   
     if(data.length<=5){
       
    for (var i=0; i<5; i++){
   
       var newDiv = document.createElement("div");
       newDiv.innerHTML = `Meal ID: <b>${data[i].idMeal}</b> <br>
                                  Meal Name: <b>${data[i].strMeal}</b> <br>
                                  <img src="${data[i].strMealThumb}"> <br>
                                  Meal Title: <b>${data[i].strCategory}</b> <br>
                                  Cooking Instructions: ${data[i].strInstructions}<br><br>`; 
       oldContent.appendChild(newDiv); 
       
    }
     }
   
     else{
       
   //  var oldContent2 = document.getElementById("container2");
    
   oldContent2.style.display="flex";
   
       for (var i=0; i<5; i++){
           
           var newDiv = document.createElement("div");
           newDiv.innerHTML = `Meal ID: <b>${data[i].idMeal}</b> <br>
                                  Meal Name: <b>${data[i].strMeal}</b> <br>
                                  <img src="${data[i].strMealThumb}"> <br>
                                  Meal Title: <b>${data[i].strCategory}</b> <br>
                                  Cooking Instructions: ${data[i].strInstructions}<br><br>`; 
           newDiv.classList.add("innerStyle");
           oldContent.appendChild(newDiv); 
           
           
        }
   
     }
    
     
   
   }