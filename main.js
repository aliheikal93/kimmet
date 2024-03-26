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
              })
          onclickcat.addEventListener("click",function(){
            let list = document.getElementById("products");
              list.remove();
          });
          onclickcat.addEventListener("click",reloadproduct);
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
      let list  = document.createElement("div");
      list.id = "products";
      list.className = "contnet";
      secmain.appendChild(list);
      
      for (let i = 0; i < allproducts.length; i++) {
       
      let divcard  = document.createElement("div");
      divcard.className = "card";
      list.appendChild(divcard);

      let divicon = document.createElement("div");
      divicon.className = "icon";
      divcard.appendChild(divicon);

      let imgicon = document.createElement("img");
      imgicon.src = `${allproducts[i].image}`;
      imgicon.alt = `img${allproducts[i].id}`;
      divicon.appendChild(imgicon);

      let divinfo = document.createElement("div");
      divinfo.className = "info";
      divcard.appendChild(divinfo);

      let titleH3 = document.createElement("h3");
      titleH3.innerHTML = `${allproducts[i].title}`;
      divinfo.appendChild(titleH3);

      let pdiv = document.createElement("p");
      pdiv.innerHTML = `${allproducts[i].description.substring(0, 80)}`;
      divinfo.appendChild(pdiv);

      let points = document.createElement("span");
      points.className = "pointsspan";
      points.id = `points${allproducts[i].id}`;
      points.innerHTML = "...";
      pdiv.appendChild(points);

      let showMoreText = document.createElement("span");
      showMoreText.className = "spanmore";
      showMoreText.id = `moreText${allproducts[i].id}`;
      showMoreText.innerHTML = `${allproducts[i].description}`;
      pdiv.appendChild(showMoreText);

      let buttonText = document.createElement("a");
      buttonText.className = "btnmore";
      buttonText.id = `textButton${allproducts[i].id}`;
      buttonText.innerHTML = "Show More";
      pdiv.appendChild(buttonText);

     
     ////see more //
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
        ///////

        console.log("you are here");

      }



                                         })
                                        }

