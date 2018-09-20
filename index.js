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
 var newObj = { itemName : item, itemPrice: Math.floor(Math.random() * 100)}
 cart.push(newObj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if (cart.length === 0){
    return "Your shopping cart is empty.";
  } else {
    var returnString = `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
    for (var i = 1 ; i < cart.length; i++){
        // check if current item is the last item in the cart
        if (i === cart.length - 1){
          // if it isn't then you need to add a comma and the data
          returnString += `, and ${cart[i].itemName} at $${itemPrice}.`
        } else {
          // otherwise just close off the statement
          returnString += `, ${cart[i].itemName} at $${cart[i].itemPrice}`;
        }
    }
    return returnString;
  }
}

function total() {
  // write your code here
  var total = 0;
  for (var i = 0; i < cart.length; i++) { 
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  // write your code here
  var index = cart.indexOf(item);
  if (index === -1) {
    return "That item is not in your cart.";
  }
  delete cart[index];
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you.";
  } 
  return `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`;
}
