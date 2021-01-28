//Phone Plus{+/-} Switch
var phonePlus = document.getElementById("phone-plus");
var phoneMinus = document.getElementById("phone-minus");

//case Plus{+/-} Switch
var casePlus = document.getElementById("case-plus");
var caseMinus = document.getElementById("case-minus");

//machine wich catch a id & parse into intiger
function pasrseToInt(id) {
  const total = document.getElementById(id).innerText;
  const totalNumber = parseInt(total);
  return totalNumber;
}

//+/- handler
// if + then increase=True; if - then increase = false;
//productQuantity means = id of input
//productCost means = id of total cost
function phoneCount(increase, productQuantity, productCost) {
  const Quantity = document.getElementById(productQuantity).value;
  const QuantityNumber = parseInt(Quantity);
  let totalQuantity = QuantityNumber;
  if (increase == true) {
    totalQuantity = QuantityNumber + 1;
  } else if (increase == false && totalQuantity > 0) {
    totalQuantity = QuantityNumber - 1;
  }
  document.getElementById(productQuantity).value = totalQuantity;

  if (productCost == "phone-cost") {
    const cost = document.getElementById(productCost).innerText;
    const costNumber = parseInt(cost);
    totalCost = totalQuantity * 1219;
  } else if (productCost == "case-cost") {
    const cost = document.getElementById(productCost).innerText;
    const costNumber = parseInt(cost);
    totalCost = totalQuantity * 59;
  }
  document.getElementById(productCost).innerText = totalCost;
}

//machine for calculating Sub Total tax free
function subTotal() {
  const casePrice = pasrseToInt("case-cost");
  const phonePrice = pasrseToInt("phone-cost");
  const subTotal = casePrice + phonePrice;
  return (document.getElementById("subtotal").innerText = subTotal);
}

//machine for calculating tax
function tax() {
  const tax = subTotal() * 0.05;
  const taxRound = Math.round(tax);
  return (document.getElementById("tax").innerText = taxRound);
}

//machine for calculating total =subtotal+tax
function total() {
  const total = subTotal() + tax();
  return (document.getElementById("total").innerText = total);
}

//All-Event
phonePlus.addEventListener("click", function () {
  phoneCount(true, "phone-quantity", "phone-cost");
  subTotal();
  tax();
  total();
});
phoneMinus.addEventListener("click", function () {
  phoneCount(false, "phone-quantity", "phone-cost");
  subTotal();
  tax();
  total();
});
casePlus.addEventListener("click", function () {
  phoneCount(true, "case-quantity", "case-cost");
  subTotal();
  tax();
  total();
});
caseMinus.addEventListener("click", function () {
  phoneCount(false, "case-quantity", "case-cost");
  subTotal();
  tax();
  total();
});
