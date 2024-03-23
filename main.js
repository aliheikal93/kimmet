    var hamburger = document.querySelector(".hamburger");
    var mynav = document.getElementById("mynav");
    hamburger.addEventListener("click", function() {
      hamburger.classList.toggle("is-active");
      mynav.classList.toggle("sidenav");
      mynav.classList.toggle("sidenavopen");
    });

var categoriesopen = document.getElementById("categoriesopen") ;
var categorielist = document.getElementById("categorielist") ;


categoriesopen.addEventListener("mouseenter", function() {
  categorielist.classList.toggle("categorielist");
  categorielist.classList.toggle("categorielistopen");
  // console.log("mouse on")
})


categorielist && categoriesopen.addEventListener("mouseleave", function() {
    categorielist.classList.toggle("categorielist");
    categorielist.classList.toggle("categorielistopen");
    // console.log("mouse off")
  })






    let clickpathcat ="/categ.html";
    let Categories = "0";
    let allproducts 
    document.addEventListener('DOMContentLoaded', function(){


      fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json()).then(data =>  {
        // console.log(data)
        Categories = data
        for (let i = 0; i < Categories.length; i++) {
          let list = document.getElementById("categorielist");
         list.innerHTML += `<a id="onclickcat${[i]}" class="catlisthover" href="${Categories[i]}.html">${Categories[i]}</a>`;
                                                    }
                                           })


        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json()).then(data =>  {
          // console.log(data)
          allproducts = data
          for (let i = 0; i < allproducts.length; i++) {
            let secmain = document.getElementById("secmain");
            let list  = document.createElement("div");
           list.id = "products";
           list.className = "contnet";
           secmain.appendChild(list);
           let loadproducts = document.getElementById("products");
          //  console.log(loadproducts);
           loadproducts.innerHTML += `<div class="card">
           <div class="icon">
           <img src="${allproducts[i].image}" alt="img${allproducts[i].id}">
           </div>
           <div class="info">
           <h3>${allproducts[i].title}</h3>
           <p>${allproducts[i].description.substring(0, 150)}
           <span class="pointsspan" id="points${allproducts[i].id}">...</span>
           <span id="moreText${allproducts[i].id}">${allproducts[i].description}</span>
           </p>
           <button id="textButton${allproducts[i].id}">Show More</button>
           </div>
           </div>
           </div>`;
           let points = document.getElementById(`points${allproducts[i].id}`);
           let showMoreText = document.getElementById(`moreText${allproducts[i].id}`);
           let buttonText = document.getElementById(`textButton${allproducts[i].id}`); 
          //  console.log(points);
          //  console.log(buttonText);
          //  console.log(showMoreText);
           buttonText.addEventListener("click",function () {  
            if (points.style.display === "none") {
                showMoreText.style.display = "none";
                points.style.display = "inline";
                buttonText.innerHTML = "Show More";
            }
            else {
                showMoreText.style.display = "inline";
                points.style.display = "none";
                buttonText.innerHTML = "Show Less";
            }}
        );
          }
  


                                             })
 
  })



    