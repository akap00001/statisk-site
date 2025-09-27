//console.log("det kører");

const ListContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products?limit=20`)
  .then((response) => response.json())
  .then(data => showProducts(data));
  
    function showProducts(products) {
    //console.log(products);
    products.forEach(element => {
        console.log(element);

          ListContainer.innerHTML += `<div class="produkter ${element.soldout && "udsolgt"} ${element.discount && "tilbud"}">
          <div class="små_billeder">
            <a href="produkt.html"> <img src="https://kea-alt-del.dk/t7/images/webp/640/${element.id}.webp" alt="Sort Puma skrift rygsæk" /></a>
          </div>
          <h4>${element.productdisplayname}</h4>
          <div class="små_tekst">
            <p class="klasse">${element.articletype} | ${element.brandname}</p>
            <p class="pris">DKK ${element.price},-</p>
            <div class="discounted">
                <p>Now DKK <span>${Math.round(element.price*element.discount/100)}</span>,-</p>
                <p><span>${element.discount}</span>%</p>
            </div>
            <a href="produkt.html?id=${element.id}" class="">Read More</a>
            </div>
        </div>`;
    })
    
    }

