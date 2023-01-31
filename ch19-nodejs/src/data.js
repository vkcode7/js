const users = [
        {name: 'mario', premium: true},
        {name: 'luigi', premium: false},
        {name: 'yoshi', premium: true}
];

export const getPremUsers = (users) => {
    return users.filter(user => user.premium);
};

export default users;

//only 1 default export value is allowed per file

//alternative way is below (no export above needed)
//export { getPremUsers, users as default};