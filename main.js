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
    let allproducts ;
    let fetchUrl = 'https://fakestoreapi.com/products';

    document.addEventListener('DOMContentLoaded',reloadproduct)
    document.addEventListener('DOMContentLoaded', loadcatg)

      function loadcatg(){
      fetch('https://fakestoreapi.com/products/categories')
      .then(res=>res.json()).then(data =>  {
        // console.log(data)
        Categories = data
        for (let i = 0; i < Categories.length; i++) {

          let catlist = document.getElementById("categorielist");

          let alist  = document.createElement("a");
          alist.id = `onclickcat${Categories[i]}`;
          alist.className = `catlisthover`;
          alist.href = "#0"
          alist.innerText = `${Categories[i]}`
          catlist.appendChild(alist);
         let onclickcat = document.getElementById(`onclickcat${Categories[i]}`);
         onclickcat.addEventListener("click",function () {
          fetchUrl = `https://fakestoreapi.com/products/category/${Categories[i]}`
            // alert (`link is ${fetchUrl}` )  
          return fetchUrl 
              })
          onclickcat.addEventListener("click",reloadproduct);
          // onclickcat.addEventListener("click",clearsec);
          onclickcat.addEventListener("click",function(){
            let title = document.getElementById("title");
            title.textContent = `${Categories[i]}`
          });

                                                    }
                                           })
        
  }

  



  function reloadproduct(){
    fetch(fetchUrl)
    .then(res=>res.json()).then(data =>  {
      // console.log(data)
      allproducts = data
      let secmain = document.getElementById("secmain");
      for (let i = 0; i < allproducts.length; i++) {

        let list  = document.createElement("div");
       list.id = "products";
       list.className = "contnet";
       secmain.appendChild(list);
       list.innerHTML += 
       `<div class="card">
          <div class="icon">
            <img src="${allproducts[i].image}" alt="img${allproducts[i].id}">
          </div>
          <div class="info">
            <h3>${allproducts[i].title}</h3>
            <p>${allproducts[i].description.substring(0, 80)}
              <span class="pointsspan" id="points${allproducts[i].id}">...</span>
              <span class="spanmore" id="moreText${allproducts[i].id}">${allproducts[i].description}</span>
              <a  class="btnmore" id="textButton${allproducts[i].id}">Show More</a>
            </p>
          </div>
          
       </div>`;
       let points = document.getElementById(`points${allproducts[i].id}`);
       let showMoreText = document.getElementById(`moreText${allproducts[i].id}`);
       let buttonText = document.getElementById(`textButton${allproducts[i].id}`); 
       
      //  console.log(points);
      //  console.log(buttonText);
      //  console.log(showMoreText);
       buttonText.addEventListener("onclick",function () { 
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
                                        }

//  function clearsec (){
// list.remove()
// }