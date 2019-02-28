const net = require("net");
const port = 3000;
const host = "localhost";

const socket = net.createConnection({
    port,
    host,
});

socket.pipe(process.stdout);

socket.write("holaaaaaaa");

socket.on("error", function(){
    console.log("Imposible conectar con servidor");
});

setTimeout(function(){
    console.log("shutting down Client");
    socket.close();
    process.exit(0);
}, 10000);
/*setTimeout(() => {
    console.log("shutting down client");
    socket.close();
    process.exit(0);
}, 10000);*/