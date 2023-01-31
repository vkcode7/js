import {styleBody, addTitle, contact} from './dom.js'; //.js is not needed
import users, { getPremUsers } from './data'; //users is default export
                                //getPremUsers is named export

console.log('index file 2');
console.log(contact);
addTitle('Test 2');

const premUsers = getPremUsers(users);
console.log(users, premUsers);

/*
const greet = name => {
    console.log(`hello ${name}`);
};

greet('mario');
greet('luigi');
greet('jason');
*/
