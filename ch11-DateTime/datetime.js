//concepts
//date-fns.org >- for advanced datetime fns
const before = new Date("Februrary 1 2019 7:30:59");
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(mins, hours, days);
console.log(`the blog was written ${days} ago`);

const timestamp = before.getTime();

console.log(new Date(timestamp));

//making a digital clock
const clock = document.querySelector('.clock');
const tick = () => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();
    const s = now.getSeconds();

    const html = `
        <span>${h}</span>:
        <span>${m}</span>:
        <span>${s}</span>
        `

    clock.innerHTML = html;
    console.log(h, m, s);
};

setInterval(tick, 1000);