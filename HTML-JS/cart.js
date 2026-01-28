let cart = [];
let total = 0;
function saveCartToStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('cartTotal', total.toString());
}
function loadCartFromStorage() {
    const savedCart = localStorage.getItem('cart');
    const savedTotal = localStorage.getItem('cartTotal');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        if (savedTotal) {
            total = parseFloat(savedTotal);
        }
    }
}
function clearCartStorage() {
    localStorage.removeItem('cart');
    localStorage.removeItem('cartTotal');
}
function add(food , price){
    const inMenu = cart.find(foods=> foods.name===food);
    if(inMenu){
        inMenu.amount = inMenu.amount +1;
    }
    else{
        cart.push({name : food, cost: price, amount: 1});
    }
    saveCartToStorage();
}
function remove(foodName){
    cart = cart.filter(foods => foods.name !== foodName);
    saveCartToStorage();
    update();
}
function change(food, changes){
    const foods = cart.find(item => item.name === food);
    if(foods){
        foods.amount = foods.amount + changes;
        if(foods.amount < 1){
            remove(food);
            return;
        }
        saveCartToStorage();
        update();
    }
}
function clear(){
    if(confirm('Are you sure you want to clear the cart?')){
        cart = [];
        clearCartStorage();
        update();
    }
}
function update(){
    const lists = document.querySelector('#itemsList');
    const empty  = document.querySelector('#empty');
    const subtotal = document.querySelector('#cartSubtotal');
    const tot = document.querySelector('#cartTotal');
    total = cart.reduce((sum, food)=> {
        return sum + food.amount * food.cost;
    }, 0);
    saveCartToStorage();
    if(cart.length === 0){
        if(empty) empty.style.display = 'block';
        if(lists) lists.innerHTML = '';
    }
    else{
        if(empty) empty.style.display = 'none';
        if(lists){
            lists.innerHTML = '';
            cart.forEach(item => {
                lists.innerHTML += 
                    '<div class="items">' +
                        '<div class="cartItems">' +
                            '<strong>' + item.name + '</strong><br>' +
                            '<small>' + item.cost + ' Birr x' + item.amount + ' = ' + 
                            (item.cost * item.amount) + ' Birr</small>' +
                        '</div>' +
                        '<div class="cartItem">' +
                            '<button onclick="change(\'' + item.name + '\', -1)">-</button>' +
                            '<span>' + item.amount + '</span>' +
                            '<button onclick="change(\'' + item.name + '\', 1)">+</button>' +
                            '<button onclick="remove(\'' + item.name + '\')" class="removeButton">x</button>' +
                        '</div>' +
                    '</div>';
           });
        }
    }
    if(subtotal){
        subtotal.textContent = total.toFixed(2)+ ' Birr';
    }
    if(tot){
        tot.textContent = total.toFixed(2)+ ' Birr';
    } 
}
function submitOrder() {
    if (cart.length === 0) {
        alert('Please add foods or drinks or dessert to your order first');
        return;
    }
    saveCartToStorage();
    window.location.href = 'checkout.html';
}

