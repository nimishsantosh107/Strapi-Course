const { io } = require("socket.io-client");

const SERVER_URL = "http://localhost:1337";
const socket = io(SERVER_URL);

//  wait until socket connects before adding event listeners
socket.on("connect", () => {
    socket.on("single-array:find", (data) => {
        console.log("Trigger 1");
        console.log(data.data.attributes);
    });

    socket.on("post:find", (data) => {
        console.log("Trigger 2");
        console.log(data);
    });

    socket.on("post:findOne", (data) => {
        console.log("Trigger 3");
        console.log(data);
    });
});
