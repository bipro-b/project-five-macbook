// using function update all cost value

function inputProperties(button, cost) {
    const inputCost = document.getElementById(button);
    const totalCostText = inputCost.innerText;
    let totalCost = parseInt(totalCostText);
    totalCost = cost;
    inputCost.innerText = totalCost;
    totalPrice();
}


// Total price counting 

function totalPrice() {
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;

    const inputTotalPrice = document.getElementById('total-price');
    const totalPrice = parseInt(bestPrice) + parseInt(memoryCost) + parseInt(storageCost) + parseInt(deliveryCost);
    inputTotalPrice.innerText = totalPrice;

    const discountPrice = document.getElementById('discount-price');
    discountPrice.innerText = totalPrice;


}

// count for extra memory 

document.getElementById('mbtn-two').addEventListener('click', function () {

    inputProperties('memory-cost', 180);

});

document.getElementById('mbtn-one').addEventListener('click', function () {

    inputProperties('memory-cost', 0);

});


// count for extra SSD  storage 


document.getElementById('sbtn-two').addEventListener('click', function () {

    inputProperties('storage-cost', 100);

});
document.getElementById('sbtn-three').addEventListener('click', function () {

    inputProperties('storage-cost', 180);

});
document.getElementById('sbtn-one').addEventListener('click', function () {

    inputProperties('storage-cost', 0);

});

// delivery charge count

document.getElementById('dbtn-one').addEventListener('click', function () {



    inputProperties('delivery-cost', 0);
});

document.getElementById('dbtn-two').addEventListener('click', function () {

    inputProperties('delivery-cost', 20);
})



// promocode  implement 

document.getElementById('pomo-btn').addEventListener('click', function () {
    const promoCode = document.getElementById('pomo-code');
    const enteredPromocode = promoCode.value;

    const calculatedDiscountPrice = document.getElementById('discount-price');
    const discountPriceText = calculatedDiscountPrice.innerText;
    const discountPrice = parseFloat(discountPriceText);

    if (enteredPromocode == 'stevekaku') {
        let totalDiscountPrice = discountPrice - discountPrice * 0.2;

        calculatedDiscountPrice.innerText = totalDiscountPrice;
        promoCode.value = '';
        document.getElementById("pomo-btn").disabled = true;
        document.getElementById("pomo-code").disabled = true;
    }
})

