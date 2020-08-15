import openSocket from "socket.io-client";
const socket = openSocket(":5000");
export default socket;
