var readline = require('readline');

// cria a interface 
var rl = readline.createInterface(process.stdin, process.stdout);

// pergunta 
rl.question(">>What is the meaning of life? ", function (answer) {
    console.log("About the meaning of life, you said " + answer);
    rl.setPrompt(">> ");
    rl.prompt();
});

// função para fechar a interface 
function closeInterface() {
    rl.close();
    console.log('Leaving Readline');
}

// monitora a digitação do comando .leave 
rl.on('line', function (cmd) {
    if (cmd.trim() == '.leave') {
        closeInterface(); return;
    }
    console.log("repeating command: " + cmd);
    rl.prompt();
});

rl.on('close', function () {
    closeInterface();
});
