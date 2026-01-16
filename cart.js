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