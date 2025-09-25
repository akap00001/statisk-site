const produktMain = document.querySelector("#produktMain");

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

//console.log("mit id fra url'en:" + id);

//indsæt "${id}" i stedet for "1525" senere

fetch(`https://kea-alt-del.dk/t7/api/products/1525`)
  .then(response => response.json()).then(product => {
    //console.log(product.articletype);
  
    produktMain.innerHTML = `
<section class="flex-grid_1-1-1">
        <div class="stor_billede">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="Sort Puma rygsæk" />
        </div>

        <div class="produkt_info">
          <div class="flexbox">
            <h2>${product.productdisplayname}</h2>
            <p><b>Type</b></p>
            <p>${product.articletype}</p>
            <p><b>Color</b></p>
            <p>${product.basecolour}</p>
            <p><b>Production Year</b></p>
            <p>${product.productionyear}</p>
            <br />
            <p><b>DKK ${product.price},-</b></p>
          </div>

          <input id="basket" type="button" value="Add to basket" />

          <div class="puma">
            <h2>${product.brandname}</h2>
            <p><i>${product.brandbio}</i></p>
          </div>
        </div> 
        </section>
        `;
        });