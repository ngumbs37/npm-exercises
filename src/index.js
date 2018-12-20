const $ = require('jquery');
import {message} from './say-hello.js';

const sayHello = () => {
    console.log("hello");
};

sayHello();
console.log(message());

$('h1').css('font-size', '10%');

