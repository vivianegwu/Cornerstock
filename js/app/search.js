window.onload = function () {
  let searchKeyword = sessionStorage
    .getItem("searchKeyword")
    .toLocaleLowerCase();
  let shops = JSON.parse(sessionStorage.getItem("shops"));

  const matchedItems = shops.filter((shop) => {
    const products = shop.products.map((p) => p.toLocaleLowerCase()).join(" ");
    if (products.includes(searchKeyword)) {
      return shop;
    }
  });

  const productsListEl = document.querySelector("#products-list");

  const matchedItemsList = matchedItems.map((item) => {
    return `
       <li class="item first">
            <div class="product-image"> <a href="product-detail.html" title="${item.name}"> <img class="small-image" src="images/${item.mainImage}" alt="${item.name}"> </a> </div>
            <div class="product-shop">
              <h2 class="product-name"><a href="product-detail.html" title="${item.name}">${item.name}</a></h2>
              <div class="ratings">
                <div class="rating-box">
                  <div style="width:50%" class="rating"></div>
                </div>
                <p class="rating-links"> <a href="#/review/product/list/id/167/category/35/">1 Review(s)</a> <span class="separator"></span></p>
              </div>
              <div class="desc std">
                <p>${item.description}<a class="link-learn" title="" href="#">Learn More</a> </p>
              </div>
              <div class="actions">
                <span class="add-to-links"> <a title="View shop" class="button link-wishlist" href="#"><span>View Shop</span></a> </div>
            </div>
          </li>
      `;
  });

  productsListEl.innerHTML =
    matchedItemsList.length !== 0
      ? matchedItemsList
      : `<h3>No search results for: ${searchKeyword}</h3>`;
};
