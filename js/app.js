const input = document.querySelector('html');

input.onkeyup = logKey;

function logKey(e) {
    if (e.key == 'Backspace'){
        app.curentCommand = app.curentCommand.slice(0, -1);
    }else if (e.key == 'Enter') {
        let reply = execCommand(app.curentCommand)
        app.commandes.push({'commande': app.curentCommand, 'out': reply[0], 'error': reply[1]});
        app.curentCommand = '';
    }
    else{
        app.curentCommand += e.key;
    }
};

var app = new Vue({
    el: '#terminal',
    data: {
        commandes: [ {'commande':'./portefolio -s edouard', 'out': 'tennis', 'error': 'this is an error'}],
        pattern: 'edouard@fedora:~$ ',
        curentCommand: ''
    },
})

function execCommand(command){
    switch (command){
        case 'help':
            return ['<table>' +
            '<tr><td class="purple">cv</td><td>télécharger mon cv</td></tr>' +
            '<tr><td class="purple">experience</td><td>télécharger mon cv</td></tr>' +
            '</table>  ', '']
        case  'clear':
            app.commandes = []
            return ['', '']
        default:
            return ['', command + ': commande inconu']
    }
}