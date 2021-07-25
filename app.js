'use strict'
let gloArr = [];
// let quantSum = 0;
function Order(food, quantity) {
    this.orderName = food;
    this.quant = quantity;
    gloArr.push(this);

}
let foodInbut = document.getElementById('food');
let foodQuantity = document.getElementById('quantity');
let form = document.getElementById('form')
form.addEventListener('submit', handelSubmit)
let table = document.getElementById('table')

function handelSubmit(event) {
    event.preventDefault();
    // parseInt(foodQuantity.value)
    new Order(foodInbut.value, parseInt(foodQuantity.value));

    console.log(gloArr);
    form.reset();
    localStorage.setItem('order', JSON.stringify(gloArr));
    table.textContent = '';
    headRender();
    Order.prototype.renderList();
    totalRaw()
}

function headRender() {
    let headRaw = document.createElement('tr')
    table.appendChild(headRaw);
    let itemHead = document.createElement('th');
    headRaw.appendChild(itemHead);
    itemHead.textContent = 'Item'
    let quantityHead = document.createElement('th');
    headRaw.appendChild(quantityHead);
    quantityHead.textContent = 'Quantity'
}



Order.prototype.renderList = function () {
    for (let i = 0; i < gloArr.length; i++) {
        let newRaw = document.createElement('tr');
        table.appendChild(newRaw);
        let newItem = document.createElement('td');
        newRaw.appendChild(newItem);
        newItem.textContent = gloArr[i].orderName;
        let newQuantity = document.createElement('td');
        newRaw.appendChild(newQuantity);
        newQuantity.textContent = gloArr[i].quant;

    }

}
function getFromLs() {
    let data = localStorage.getItem('order');
    let parseData = JSON.parse(data);
    if (parseData) {
        for (let i = 0; i < parseData.length; i++) {
            gloArr.push(parseData[i])

        }

    }

}

function totalRaw() {
    let totRaw = document.createElement('tr');
    table.appendChild(totRaw);
    let total = document.createElement('td');
    totRaw.appendChild(total);
    total.textContent = "total Quantity"
    let totalQuant = document.createElement('td');
    totRaw.appendChild(totalQuant);
    let quantSum = 0;
    for (let i = 0; i < gloArr.length; i++) {
        quantSum += gloArr[i].quant
        
    }
    
    totalQuant.textContent = quantSum;

}
getFromLs()
headRender()
Order.prototype.renderList()
totalRaw()
