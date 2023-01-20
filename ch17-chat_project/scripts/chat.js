// adding new chat docs
// setting up a realtime listener to get new chats
// updating the username
// updating the room

class Chatroom {
    constructor(room, username) {
        this.room = room;
        this.username = username;
        this.chats = db.collection('chats');
        this.unsub;
    }

    async addChat(message) {
        //format a chat object
        const now = new Date();
        const chat = {
            message,
            username: this.username,
            room: this.room,
            created_at: firebase.firestore.Timestamp.fromDate(now)
        };

        //save the chat doc
        const response = await this.chats.add(chat);
        return response;
    }

    getChats(callback) {
        this.unsub = this.chats
            .where('room', '==', this.room) //just liten for particular room
            .orderBy('created_at') //requires an index
            .onSnapshot(snapshot => {
                snapshot.docChanges().forEach(change => {
                    if(change.type === 'added') {
                        //update the ui
                        callback(change.doc.data());
                    }
                });
            });
    }

    updateName(username) {
        this.username = username;
        localStorage.setItem('username', username);
    }

    updateRoom(room) {
        this.room = room;
        console.log('room updated');
        if(this.unsub) {
            this.unsub();
        }
    }
}



//const chatroom = new Chatroom('gaming', 'shaun');
/*
chatroom.addChat('hello everyone')
    .then(() => console.log('chat added'))
    .catch(err => console.log(err));
*/
/*
chatroom.getChats((data) => {
    console.log(data);
});


setTimeout(() => {
    chatroom.updateRoom('gaming');
    chatroom.updateName('yoshi');
    chatroom.getChats((data) => {
        console.log(data);
    });
    chatroom.addChat('hello');
});
*/
