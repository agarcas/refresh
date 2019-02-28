const net = require("net");
const port = 3000;
const server = "localhost";

const client = new net.Socket();
client.connect(port,server, function(){
    console.log("Connected");
    client.write("Hello Server, I'm a client");
});

client.on("data", function(data){
    console.log("Recived: " + data);
    client.destroy();
});

client.on("close", function(){
    console.log("Connection closed");
});

