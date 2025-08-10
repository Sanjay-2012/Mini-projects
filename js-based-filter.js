let products = [
  {
    productPhoto: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/r/7/z/1-fk-183bdtgch-timewear-men-original-imahb5w5nwjyqvuk.jpeg?q=70",
    productName: "TIMEWEAR",
    productDescription: "Formal Blue Dial Day and Date Watch",
    productPrice: 299,
    category: "Watch"
  },
  {
    productPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfOHvIZbIQJZlSSWLnEAA-3MQb_xHIrwMeA&s",
    productName: "RUSTET",
    productDescription: "Day & Date Analog Watch - For Boys",
    productPrice: 399,
    category: "Watch"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/612/612/xif0q/watch/p/b/c/-original-imahc78p69ccgzre.jpeg?q=70",
    productName: 'PETER ENGLAND ',
    productDescription: "Analog Watch - For Men PE000008F",
    productPrice: 899,
    category: "Watch"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/e/r/f/-original-imah56hkgehywn5b.jpeg?q=70",
    productName: "Samsung Galaxy F05",
    productDescription: "4 GB RAM | 64 GB ROM",
    productPrice: 6999,
    category: "Mobiles"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/i/a/-original-imah2y7hazjdbrzh.jpeg?q=70",
    productName: 'realme GT 6 ',
    productDescription: "12 GB RAM | 256 GB ROM  | 32MP Front Camera 5500 mAh  ",
    productPrice: 27999,
    category: "Mobiles"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/p/y/k/-original-imah4t2mazqcnkrh.jpeg?q=70",
    productName: 'realme P2 Pro 5G',
    productDescription: "12 GB RAM | 256 GB ROM 17.02 cm (6.7 inch) Battery 7s Gen2 Processor",
    productPrice: 18299,
    category: "Mobiles"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/z/4/w/-original-imahd2uywywyg8eh.jpeg?q=70",
    productName: "Samsung TV 32",
    productDescription: "HD Ready | Tizen OS | 20W Sound",
    productPrice: 11999,
    category: "Tv"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/r/r/0/-original-imahd98mswfhfqxc.jpeg?q=70",
    productName: 'XIAOMI by Mi Fire Tv 80 cm (32 inch)',
    productDescription: "Operating System: FireTv OS Resolution: HD Ready 1366 x 768 Pixels Sound Output: 20 W Refresh Rate: 60 Hz",
    productPrice: 11999,
    category: "Tv"
  },
  {
    productPhoto: "https://rukminim2.flixcart.com/image/312/312/xif0q/television/d/n/c/-original-imahdzrcyffb5uzh.jpeg?q=70",
    productName: 'LG AI TV UR7500 126 cm (50 inch)',
    productDescription: "Operating System: WebOS Resolution: Ultra HD (4K) 3840 x 2160 Pixels Sound Output: 20 W Refresh Rate: 60 Hz",
    productPrice: 36999,
    category: "Tv"
  },
];

// Write section directly to the page once
let productSection = "<section id='productSection'>";
products.forEach(p => {
  productSection += `
    <figure data-name="${p.productName.toLowerCase()}"
            data-description="${p.productDescription.toLowerCase()}"
            data-price="${p.productPrice}"
            data-category="${p.category}">
      <img src="${p.productPhoto}" alt="Product"><br><br>
      <figcaption>${p.productName}</figcaption><br>
      <figcaption>${p.productDescription}</figcaption><br>
      <figcaption>₹${p.productPrice}</figcaption>
    </figure>
  `;
});
productSection += "</section>";
document.write(productSection); 

// Filter function
function filterProducts() {
  const search = document.getElementById("searchInput").value.toLowerCase();  //watch
  const category = document.querySelector("#categoryList li.active").dataset.category;
  const priceLimit = parseInt(document.getElementById("priceRange").value);

  const figures = document.querySelectorAll("#productSection figure");

  figures.forEach(fig => {
    const name = fig.dataset.name;
    const desc = fig.dataset.description;
    const price = parseInt(fig.dataset.price);
    const cat = fig.dataset.category;

    const matchesSearch = name.includes(search) || desc.includes(search);
    const matchesCategory = category === "All" || cat === category;
    const matchesPrice = price <= priceLimit;

    fig.style.display = (matchesSearch && matchesCategory && matchesPrice) ? "block" : "none";
  });
}

// Event listeners
document.getElementById("searchInput").addEventListener("input", filterProducts);
document.getElementById("priceRange").addEventListener("input", function () {
  document.getElementById("rangeValue").innerText = this.value;
  filterProducts();
});
document.querySelectorAll("#categoryList li").forEach(li => {
  li.addEventListener("click", () => {
    document.querySelectorAll("#categoryList li").forEach(l => l.classList.remove("active"));
    li.classList.add("active");
    filterProducts();
  });
});

