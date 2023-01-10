
//The fetch() API - newer native API built over Promise
/*
fetch('todos/luigi.json').then((response) => {
    //resolve - even if there is an error, say incorrect URL
    //the code will come here
    console.log('Resolved:', response);
    return response.json(); //returns data in then()
}).then(data => { //chained
    console.log(data);
}).catch((err)=>{
    //rejected - only when there is a network error
    console.log('Rejected:', err);
});
*/
//chaining can make the above code messy when there are multiple requests
//chained together
//async and await comes to rescue

//async & await
//async always returns a Promise()

const getTodos = async () => { //async makes it a non blocking function
    //so rest of code can continue
    //js wiill be stalled till fetch returns
    const response = await fetch('todos/luigi.json');
    if(response.status !== 200) {
        throw new Error("status code is not OK");
    }

    const data = await response.json();
    //console.log(data);
    return data;
}; 

const testPromise = getTodos()
.then(data => {
    console.log('resolved: ', data);
}) // test is a Promise object here
.catch(err => {
    console.log('rejected: ', err.message);
});

console.log(testPromise);

