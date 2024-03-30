let total = 0;

function addToCart(itemName, itemPrice) {
  total += itemPrice;
  document.getElementById('total-price').innerText = total.toFixed(2);

  const cartItems = document.getElementById('cart-items');
  const item = document.createElement('div');
  item.classList.add('cart-item');
  item.innerHTML = `
    <span>${itemName}</span>
    <span>$${itemPrice.toFixed(2)}</span>
    <button class="remove-from-cart" onclick="removeFromCart(this)">Remove</button>
  `;
  cartItems.appendChild(item);
}

function removeFromCart(button) {
  const item = button.parentNode;
  const itemPrice = parseFloat(item.children[1].innerText.slice(1));
  total -= itemPrice;
  document.getElementById('total-price').innerText = total.toFixed(2);
  item.parentNode.removeChild(item);
}

function checkout() {
  alert(`Total: $${total.toFixed(2)}`);
}

document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
      const menuItem = this.parentNode;
      const itemName = menuItem.dataset.name;
      const itemPrice = parseFloat(menuItem.dataset.price);
      addToCart(itemName, itemPrice);
    });
  });
});

// searching bar

function search() {
  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var categoryGrid = document.getElementById("categoryGrid");
  var gridItems = categoryGrid.getElementsByClassName("grid-item");

  for (var i = 0; i < gridItems.length; i++) {
    var overlay = gridItems[i].getElementsByClassName("overlay")[0];
    var category = overlay.innerText.toLowerCase();
    var parentGrid = gridItems[i].parentNode;

    if (category.includes(searchInput)) {
      gridItems[i].style.display = "block";
      parentGrid.style.display = "grid";
    } else {
      gridItems[i].style.display = "none";
      var visibleItems = parentGrid.querySelectorAll('.grid-item[style="display: block;"]');
      if (visibleItems.length === 0) {
        parentGrid.style.display = "none";
      } else {
        parentGrid.style.display = "grid";
      }
    }
  }
}
