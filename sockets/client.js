var net = require('net');

var client = new net.Socket();
client.setEncoding('utf8');

// conecta ao servidor 
client.connect('8124', 'localhost', function () {
    console.log('connected to server');
    client.write('Who needs a browser to communicate?');
});

// ao receber dados, reenviá-los ao servidor 
process.stdin.on('data', function (data) {
    client.write(data);
});

// ao receber os dados devolvidos, enviá-los ao console 
client.on('data', function (data) {
    console.log(data);
});

// quando o servidor fechar a conexão 
client.on('close', function () {
    console.log('connection is closed');
});
