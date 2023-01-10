
//https://jsonplaceholder.typicode.com/ <- fake API source for testing

setTimeout(() => {
    console.log("Callback function fired");
}, 1000);
console.log(1);
console.log(2);
console.log(3);
console.log(4);

//HTTP Request object
/*
const getTodos = (resource, mycallback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState);
        if(request.readyState == 4) {
            if(request.status == 200) { //4 means request is COMPLETE
                //console.log(request, request.responseText);
                const data = JSON.parse(request.responseText);
                mycallback(undefined, data);
            }
            else {
                console.log('error');
                mycallback('coulnt fetch data', undefined);
            }

        }
    });
    request.open('GET', resource); //get from local folder
    //request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    //request.open('GET', 'todos/luigi.json'); //get from local folder

    request.send();
};

resource = 'todos/luigi.json';

getTodos(resource, (err, data) => {
    console.log('callback fired');
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});
*/

//promise example

const getTodos = (resource) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            //console.log(request, request.readyState);
            if(request.readyState == 4) {
                if(request.status == 200) { //4 means request is COMPLETE
                    //console.log(request, request.responseText);
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                }
                else {
                    //console.log('error');
                    reject('coulnt fetch data');
                }
            }
        });
        request.open('GET', resource); //get from local folder
        request.send();
    });
};

getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved: ', data);
}).catch((err) => {
    console.log('promise rejected: ', err);
});

//chinaing using Promises
getTodos('todos/luigi.json').then(data => {
    console.log('promise resolved: ', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch((err) => {
    console.log('promise rejected: ', err);
});




const getSomething = () => {
    return new Promise((resolve, reject) => {
        //fetch something
        //resolve('some data');
        reject('some error');
    });
};

/*
//when data arrives the callback method in "then" is invoked by Promise
//it can take callback functions, one for resolve, another for fetch
getSomething().then((data) => {
    console.log(data); //resolve
}, (err) => {
    console.log(err); //fetch
});
*/

//above can be rewritten using catch as:
/*
getSomething().then((data) => {
    console.log(data); //resolve
}).catch(err => {
    console.log(err); //fetch
});
*/