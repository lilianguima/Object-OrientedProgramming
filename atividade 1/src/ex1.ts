//Classe de cliente e apresente os atributos e métodos
//defina as instâncias deste objeto e apresente as informações as informações

class Client {
    public Name : string
    public CPF : number
    public birthDate: string //data de nascimento
}
    const client : Client = new Client
    client.Name ='Lílian';
    client.CPF = 18257195782;
    client.birthDate = '20/07/1998';

    console.log(`Client Name: ${client.Name}`);
    console.log(`CPF: ${client.CPF}`)
    console.log(`Customer's date of birth: ${client.birthDate}`) //data de nascimento do cliente
