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
  if(!cart.length) return console.log("Your shopping cart is empty.")
  var a = "In your cart, you have "

  for(var i = 0; i<cart.length;i++){
    if((i+1 === cart.length) && (i>0) ){
      a = a + "and "
    }

     var item = Object.keys(cart[i])[0]
     var s = item + " at $" + cart[i][item]
    a = a + s
  }
  a = a + "."
  return console.log(a)


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
