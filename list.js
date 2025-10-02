const productlistContainer = document.querySelector(".listContainer");
const params = new URLSearchParams(window.location.search);
const category = params.get("category");
//console.log(category);

document.querySelector("h2").textContent = category;

//FILTER
let allData, currentDataSet;

document.querySelectorAll("#filters button")
.forEach((knap) => knap.addEventListener("click", showFiltered));

function showFiltered() {
//console.log(this.dataset.gender);
  const gender = this.dataset.gender;
  if (gender == "All"){
    showProducts(allData);
    currentDataSet = allData;
} else {
  const udsnit = allData.filter((product) => product.gender == gender);
  currentDataSet = udsnit;
  showProducts(currentDataSet);
}

}

// SORTING
document.querySelector("#sorting").addEventListener("click", showSorted);

function showSorted(event) {
  //console.log(allData);
  const direction = event.target.dataset.direction;
  if (currentDataSet) {

  if (direction === "lohi") {
    currentDataSet.sort((a, b) => a.price - b.price);
  } else {
    currentDataSet.sort((a, b) => b.price - a.price);
  }
  showProducts(currentDataSet);
}
}

// LISTE

const ListContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=30&category=${category}`)
  .then((response) => response.json())
  .then(data => {
    allData = data;
    showProducts(allData);
  });
  
    function showProducts(products) {
    //console.log(products);
    productlistContainer.innerHTML = "";
    products.forEach((element) => {
        //console.log(element);


    productlistContainer.innerHTML += `
        <article class="produkter ${element.soldout && "udsolgt"} ${element.discount && "tilbud"}">
          <div class="små_billeder">
             <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="product image" />
          </div>
          <h4>${element.productdisplayname}</h4>
            <div class="små_tekst">
            <p class="klasse">${element.articletype} | ${element.brandname}</p>
            <p class="pris">DKK ${element.price},-</p>
            <div class="discounted ${element.discount > 0 ? '' : 'hidden'}">
                <p class="pris_nu">Now DKK <span>${Math.round(element.price*element.discount/100)}</span>,-</p>
                <p><span>${element.discount}</span>%</p>
            </div>
            <a href="produkt.html?id=${element.id}" class="">Read More</a>
            </div>
        </article>`;
    })
    
    }

