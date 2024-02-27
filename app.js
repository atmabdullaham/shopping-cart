function updateProductNumber(product, price, isIncreasing) {
 const productInput = document.getElementById(product + '-number');
 let productNumber = productInput.value;
 if (isIncreasing === true) {
  productNumber = parseInt(productNumber) + 1;
 } else if (productNumber > 0) {
  productNumber = parseInt(productNumber) - 1;
 }
 productInput.value = productNumber;
 //update product total 
 const productTotal = document.getElementById(product + '-total');
 productTotal.innerText = productNumber * price;

 // calculateTotal()
calculateTotal();

}

//handle phone increase and decrease
// 1. phone increase
document.getElementById('phone-plus').addEventListener('click', function () {
 updateProductNumber('phone', 1219, true)
})
//2. phone decrease
document.getElementById('phone-minus').addEventListener('click', function () {
 updateProductNumber('phone', 1219, false)
})



// handle case increase and decrease
//1. case increase
document.getElementById('case-plus').addEventListener('click', function () {
 updateProductNumber('case', 59, true)
})
//2. case decrease
document.getElementById('case-minus').addEventListener('click', function () {
 updateProductNumber('case', 59, false)
})