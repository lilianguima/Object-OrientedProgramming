//Classe de cliente e apresente os atributos e métodos
//defina as instâncias deste objeto e apresente as informações as informações
var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());
var client = new Client;
client.Name = 'Lílian';
client.CPF = 18257195782;
client.birthDate = '20/07/1998';
console.log("Cliente: ".concat(client.Name));
console.log("CPF: ".concat(client.CPF));
console.log("Birth date: ".concat(client.birthDate));
