var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var newObj = { itemName : item, itemPrice: Math.random(100)}
 cart.push(newObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty";
  } else {
    var returnString = "In your cart, you have";
    
    for (var i = 0; i < cart.length; i++){
    }
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
