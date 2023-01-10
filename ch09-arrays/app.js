const log = (data) => console.log(data);

const scores = [10, 30, 15, 25, 5, 18, 27, 40, 50, 45]

newscores = scores.filter ((score) => {
    return score > 20;
});

log(newscores);

const firstHighScore = scores.find((score)=> {
    return score > 30;
});

log(firstHighScore);

const halfscores = scores.map( score => score * 0.5);
log(halfscores);

log(scores);
scores.sort((a,b) => {
    return b-a;
});
log(scores);

const users = [
    {name: 'shaun', premium: true},
    {name: 'yoshi', premium: false},
    {name: 'mario', premium: false},
    {name: 'chun-li', premium: true},
];

const premusers = users.filter((user) => {
    return user.premium;
});

log(premusers);

const products = [
    {name: 'gold', price: 1800},
    {name: 'mushroom', price: 100},
    {name: 'banana', price: 10},
    {name: 'grapes', price: 60},
    {name: 'shells', price: 90},
];

//apply discount only if price > 90
const saleProducts = products.map((p) => {
    if(p.price > 90)
        return {name: p.name, price: p.price * 2 / 3};
    else
        return p;
});

log(saleProducts);

products.sort((a,b) => {
    return b.price - a.price;
});

log(products);

const filtered = products.filter(p => p.price > 60);
log(filtered);

const promos = filtered.map( p=> {
    return `the ${p.name} is ${p.price / 2} dollars`;
});

log(promos);


