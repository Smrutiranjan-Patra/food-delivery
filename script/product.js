alert('connected')


var cart = document.getElementById("cart");
cart.addEventListener("onclick", senddata);

if (localStorage.getItem('cart') == null) {
    localStorage.setItem("cartdata", JSON.stringify([]));
}

function senddata(){
    console.log(localStorage.getItem("cart"))
}