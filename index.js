var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 cart.push({[item]:~~(Math.random()*100)})
 console.log(`${item} has been added to your cart.`)
 return cart;
}

function viewCart() {
  if(!cart.length) return console.log("Your shopping cart is empty.");
  var a = "In your cart, you have ";
  var strs = []
  for(var item in cart){
    var cost = cart[item];
    strs.push(`${item} at $${cost}`)
  }
  var retValue = a + strs.join(",") + ".";
  console.log(retValue);
  return retValue;

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
