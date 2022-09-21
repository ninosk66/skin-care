/* Variables */

let cartItems = [];

let item1 = {
    name: "Oil Serum",
    price: 35
    
};

let item2 = {
    name: "Butter Moisturizer",
    price: 20
};

var counter = 0;



/* Creating elements */

let emptyButton = document.createElement("button");
emptyButton.innerHTML = "Empty Cart"
emptyButton.setAttribute("onclick" , "window.location.reload()")

let shippingBtn = document.createElement("button");
shippingBtn.innerHTML = "I want it tomorrow";
shippingBtn.setAttribute("onclick" , "fastShipping()")





/* Calculation */ 
let total = 0;





/* Adding items to cart */ 
function addToCart(item) {
    cartItems.push(item);
    
    total = cartItems.reduce((total, item) => total + item.price, 0);
    totalPlusTax = total + ( total * 10 ) / 100;
    if ( total > 500) {
        alert("limit price reached!")
    
    }

    document.getElementById("itemsCount").innerHTML = cartItems.length + " items"
    document.getElementById("orderTotal").innerHTML = "$" + total + " Total" 
    document.getElementById("totalPlusTax").innerHTML = "$" + totalPlusTax + " Including 10% Tax"
    document.getElementById("checkOut").appendChild(shippingBtn);
    document.getElementById("checkOut").appendChild(emptyButton); 
    console.log(cartItems);
    console.log(total);

}


/* limiting purchasing item1 */

function count() {
    counter++; 
    if ( counter === 2) {
        document.getElementById("limitedProd").disabled = true;
    }

}



/* Functions */

function fastShipping() {
    let totalPlusShipping = (total*1.1) + 10;   
    shippingBtn.disabled = true
    document.getElementById("totalPlusShipping").innerHTML = "$" + totalPlusShipping + " including fast shipping"
    console.log(totalPlusShipping);
}

// function emptyCart() {
//  cartItems = []; 
//  document.getElementById("itemsCount").innerHTML = " cart empty"
//  document.getElementById("checkOut").removeChild(emptyButton);
//  document.getElementById("checkOut").removeChild(shippingBtn);


// }



