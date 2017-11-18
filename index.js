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
  for(var i in cart){
    var item = Object.keys(cart[i])[0];
    var cost = cart[i][item]
    strs.push(`${item} at $${cost}`)
  }
  var final = ""
  if(strs.length == 1) final = strs[0];
  if(strs.length == 2) final = strs.join(" and ");
  var retValue = a + final + ".";
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
