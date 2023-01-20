const list = document.querySelector('ul');
const form = document.querySelector('form');
const button = document.querySelector('button');

//show recipes on UI
const addRecipe = (recipe, id) => {
    let time = recipe.created_at.toDate();
    let html = 
    `<li data-id='${id}'>
        <div>${recipe.title}</div>
        <div>${time}</div>
        <button class='btn btn-danger btn-sm my-2'>delete</button>
    </li>`

    list.innerHTML += html;
};

//delete from web page UI
const deleteRecipe = (id) => {
    const recipes = document.querySelectorAll('li');
    recipes.forEach(recipe => {
        if(recipe.getAttribute('data-id') === id) {
            recipe.remove();
        }
    });
}
//get docs from DB
/*
db.collection('recipes').get().then((snapshot) => {
    //when we have the data
    //console.log(snapshot.docs);
    snapshot.docs.forEach(doc => {
        //console.log(doc.data());
        addRecipe(doc.data(), doc.id);
    });
}).catch(err => {
    console.log(err);
});
*/
//replace above with realtime listener so no need to refresh page

const unsub = db.collection('recipes').onSnapshot(snapshot => {
    //console.log(snapshot.docChanges());
    snapshot.docChanges().forEach(change => {
        const doc = change.doc;
        if(change.type === 'added') {
            addRecipe(doc.data(), doc.id);
        } else if(change.type === 'removed') 
        {
            deleteRecipe(doc.id);
        }
    });
});

//unsub() <-- this will unsubscribe the event listener above
//from db cvhanges

button.addEventListener('click', () => {
    unsub();
    console.log('unsub from db changes');
});

//add recipe to DB
form.addEventListener('submit', e => {
    e.preventDefault();

    const now = new Date();
    const recipe = {
        title: form.recipe.value,
        created_at: firebase.firestore.Timestamp.fromDate(now),
        author: 'vk'
    };

    db.collection('recipes').add(recipe).then(() => {
        console.log('recipe added');
    }).catch(err => {
        console.log(err);
    });
});

//delete button - delete data
list.addEventListener('click', e => {
    console.log(e);
    if(e.target.tagName === 'BUTTON') {
        const id = e.target.parentElement.getAttribute('data-id');
        db.collection('recipes').doc(id).delete().then(()=> {
            console.log(`recipe id ${id} deleted`);
        });
    }
});