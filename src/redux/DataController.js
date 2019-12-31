let state = {

    profilePage: {
        posts: [
            {id: 1, message: "Hey! What's up", likeCounter: 18},
            {id: 2, message: "It's my new post", likeCounter: 12},
            {id: 3, message: "Hey!", likeCounter: 11},
            {id: 4, message: "Hey!Yo", likeCounter: 21}
        ]
    },
    dialogsPage: {
        messages: [
            {message: "Hello"},
            {message: "It's me"},
            {message: "I was wondering if after all these years you'd like to meet"},
        ],
        dialogs: [
            {id: 1, name: 'Ilnaz'},
            {id: 2, name: 'Rafil'},
            {id: 3, name: 'Ildar'},
            {id: 4, name: 'Kasimov'},
        ]

    }
};


class DataController {

    constructor(App) {
        this.App = App;
    }
    addPost(newPost) {
        state.profilePage.posts.push(newPost);
        this.App.onDataChanged(state);
    }
    getState() {
        return state;
    }
}

export default DataController;