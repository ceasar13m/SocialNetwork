import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

let dialogs = [
    {id: 1, name: 'Ilnaz'},
    {id: 2, name: 'Rafil'},
    {id: 3, name: 'Ildar'},
    {id: 4, name: 'Kasimov'},
];


let messages = [
    {message: "Hello"},
    {message: "It's me"},
    {message: "I was wondering if after all these years you'd like to meet"},
];


let posts = [
    {id: 1, message: "Hey! What's up", likeCounter: 18},
    {id: 2, message: "It's my new post", likeCounter: 12},
    {id: 3, message: "Hey!", likeCounter: 11},
    {id: 4, message: "Hey!Yo", likeCounter: 21}
];

ReactDOM.render(<App dialogs={dialogs} messages={messages} posts={posts} />, document.getElementById('root'));


serviceWorker.unregister();
