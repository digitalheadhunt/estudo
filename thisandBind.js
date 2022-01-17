// let joao = {
//     "idade": 35,
//      "sobrenome": "da silva",
//      "parentes":{
//          "mae":"telma",
//          "esposa":"maria",
//          "filha":"marta",
//           "filho":"tenorio"
//         },
//         "emprego":"marchante",
//         "empresa":"zé da carne",
     
// }

//  function show(p){
//     p.showname();
//  };

//  show(joao);
let nome = "juliano matador de galinha"
let acao = "testando"
let nome2 = "ze da pedra"
let acao2 = "correndo"
let apelido = "taximirim"

let objetu = {
    nome:"chico",
    sgNome:"fuleco",
    acao:"ligando"
}


let juliana = {
    nome:"juliana",
    sgNome:"de souza",
    apelido:"tapioca",
    acao:"malhar"
}

let falarobj = ()=> {return `${this.name} está ${this.action}`}

falarobj()

let obj = {
    nome: "tenorio ",
    apelido:"tonhão",
    acao: "correndo",
    idade:25,
    falarobj:function(){
        return `${this.nome} esta ${this.acao}, para não ser chamado de ${this.apelido}`
    }
}

function falar(){
    return `${this.nome} ${this.sgNome} está ${this.acao}`
}
 falar()

 const boundfalar = falar.bind(objetu);
 const boundobj = falarobj.bind();
 
 const boundJuliana = falar.bind(juliana);

boundfalar()

console.log(boundJuliana())
console.log(boundfalar())
console.log(falarobj())
console.log(obj.falarobj())

