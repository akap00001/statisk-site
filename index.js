const kategorier = document.querySelector(".kategorier");

fetch(`https://kea-alt-del.dk/t7/api/categories`)
.then((response) => response.json())
    .then((categories) => showCategories(categories));

function showCategories(categories) {
    categories.forEach((category) => {
        //console.log(category.category);

        kategorier.innerHTML += `<a class="gories" href="produktliste.html?category=${category.category}">${category.category}</a>`
    });
}

