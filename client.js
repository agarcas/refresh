const net = require("net");
const port = 3000;
const server = "localhost";
let cliName ;

const client = new net.Socket();
client.connect(port,server, function(cliName){   
    console.log("Connected");
    cliName = "Carlos";
    client.write("Hello Server, I'm the client " + cliName);
    setTimeout(()=>{
        console.log("shutting down client...");
        client.destroy();
    },1000)
});

client.on("data", function(data){
    console.log("Recived: " + data);
    client.destroy();
});

client.on("error",function(){
    console.log("Imposible conectar con server");
});

/*client.on("close", function(){
    console.log("Connection closed");
    client.destroy();
});*/

