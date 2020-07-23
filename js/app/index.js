let shops = [
  {
    name: "Halibiz Fashion Shop",
    products: ["Sneakers", "Sunglass", "Clothes"],
    rating: 5,
    address: "156, Egg street, Gariki Abuja, Nigeria",
    description: "",
    mainImage: "sneaker2.jpg",
    otherImages: [""],
  },
  {
    name: "Selena's Fashion Shop",
    products: ["Pencil", "Pen", "Shorts"],
    rating: 5,
    address: "10, Halibiz street, Gariki Abuja, Nigeria",
    description: "",
    mainImage: "shop1.jpg",
    otherImages: [""],
  },
  {
    name: "God Is Love Electronics",
    products: ["Paper", "Scissors", "Stone"],
    rating: 3,
    address: "14, Dorwenya street, Accra, Ghana",
    description: "Find all the electronic appliances you need for your home",
    mainImage: "shop2.jpg",
    otherImages: [""],
  },

  {
    name: "Elegance",
    products: ["Underwear", "Tops", "Electronics"],
    rating: 4,
    address: "5, Akuna street, Kumasi, Ghana",
    description:
      "Discover amazing personal care products at unbelievably cheap prices",
    mainImage: "shop3.jpg",
    otherImages: [""],
  },
  {
    name: "Amazing Grace Fashion shop",
    products: ["Books", "Sandals", "Paper"],
    rating: 4,
    address: "123, Vena street, Accra, Ghana",
    description: "So you want to rock the latest fashion designers?",
    mainImage: "shop5.jpg",
    otherImages: [""],
  },
  {
    name: "Youngster Fashion Shop",
    products: ["Sneakers", "Sunglass", "Clothes"],
    rating: 4,
    address: "14, Lela street, Kumasi, Ghana",
    description: "All your fashion needs in once place",
    mainImage: "shop6.jpg",
    otherImages: [""],
  },
];

window.onload = function () {
  sessionStorage.setItem("shops", JSON.stringify(shops));

  const searchInput = document.querySelector("#desktopSearchInput");

  searchInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") {
      sessionStorage.setItem("searchKeyword", e.target.value);
      window.location.assign("./search.html");
    }
  });
};
