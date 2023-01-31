console.log('dom file');

const body = document.querySelector('body');

//these methods cannot be imported in the index.js
//to do that use export keywprd in front of functions

export const styleBody = () => {
    body.style.background = 'peachpuff';
};

export const addTitle = (text) => {
    const title = document.createElement('h1');
    title.textContent = text;
    body.appendChild(title);
};

export const contact = 'test@testmail.com';

styleBody();
addTitle('hello world from dom file');

//another way to export is just have the following line in the end
//export { styleBody, addTitle, contact };