var productId = getProductIdFromUrl(); // Hàm này cần được triển khai để lấy productId từ URL

var productDetailContainer = document.getElementById("product-detail");

function displayProductDetail() {
  var products = getProductById(productId);
  let output = `
  <div style="width: 500xp; font-weight: bold; font-size: 70px; background-color: orange;">
  <div style="margin-left: 100px;">
  ${products.name}
  </div>
</div>
<div style="display: flex; height: 1500px; width: 1500px; justify-content: space-around;  margin-left: 10px;">
  <div class="intro" style="width: 750px; height: 600px;font-size: 20px;">
      <div style="font-size: 27px; font-weight: bold; margin-top: 15px;">
          ${products.intro}
      </div>
      <div style="color: orange; font-size: 25px; font-weight: bold; margin-top: 60px;">
          ${products.namedeatail1}
      </div>
      <div style="margin-top: 10px;">
          ${products.deatail1}
      </div>
      <div style="color: orange; font-size: 25px; font-weight: bold;">
          ${products.namedeatail2}
      </div>
      <div style="margin-top: 10px;">
          ${products.deatail2}
      </div>
      <div style="color: orange; font-size: 25px; font-weight: bold;">
      ${products.namedeatail4}
      </div>
      <div style="margin-top: 10px;">
      ${products.deatail4}
      </div>
  </div>
  <div style="width: 650px; margin-top: 30px;">
      <img src="${products.imageLink}" alt="" style="height: 500px; width: 650px; text-align: end; ">
      <div style="color: orange; font-size: 25px; font-weight: bold;">
          ${products.namedeatail3}
      </div>
      <div style="margin-top: 10px; font-size: 20px;">
          ${products.deatail3}
      </div>
  </div>
</div>
  `;
  productDetailContainer.innerHTML += output;
}
displayProductDetail(data);

function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  expandImg.src = imgs.src;
}

function getProductIdFromUrl() {
  // Triển khai hàm để lấy productId từ URL, ví dụ: product.html?id=1
  var params = new URLSearchParams(window.location.search);
  return params.get("id");
}

function getProductById(id) {
  // Triển khai hàm để lấy thông tin sản phẩm từ danh sách products
  return data.find((product) => product.id == id);
}
