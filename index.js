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
    var returnString = `In your cart, you have ${cart[0].itemName} at ${cart[0].itemPrice}`;
    for (var i = 1 ; i < cart.length; i++){
      if (cart.length >= 3) {
          // add commas  
          if (i === cart.length - 1){
            returnString += `, and ${cart[i].itemName} at ${itemPrice}.`
          } else {
          returnString += `, ${cart[i].itemName} at ${cart[i].itemPrice}`;
          }
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
