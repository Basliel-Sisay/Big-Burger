let total = 0;
let cart = [];
function add(food , price){
    const inMenu = cart.find(foods=> foods.name===food);
    if(inMenu){
        inMenu.amount = inMenu.amount +1;
    }
    else{
        cart.push({name : food, cost: price, amount: 1});
    }
}
function remove(foodName){
    cart = cart.filter(foods => foods.name !== foodName);
    update();
}
function change(food, changes){
    const foods = cart.find(item => item.name === food);
    if(foods){
        foods.amount = foods.amount + changes;
        if(foods.amount < 1){
            remove(food);
        }
        update();
    }
}
function clear(){
    if(confirm('Are you sure you want to clear the cart?')){
        cart = [];
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
    if(cart.length === 0){
        empty.style.display = 'block';
        lists.innerHTML = '';
    }
    else{
        empty.style.display = 'none';
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
    if(subtotal){
        subtotal.textContent = total.toFixed(2)+ ' Birr';
    }
    if(tot){
        tot.textContent = total.toFixed(2)+ ' Birr';
    } 
}
function submitOrder() {
    if (cart.length === 0) {
        alert('Please add foods/drinks/dessert to your order first');
        return;
    }
    alert('Order submitted! Total: ' + total.toFixed(2)+ ' Birr');
}

