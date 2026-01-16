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
    cart= cart.filter(foods => foods.name !== foodName);
}
function change(food, changes){
    const foods = cart.find(item => item.name === food);
    if(foods){
        foods.amount = food.amount + change;
        if(foods.amount <1){
            remove();
        }
    }
}
function clear(){
    if(confirm('Are you sure you want to clear the cart?')){
        cart = [];
    }
}