let nome = "César"
let idade = 40
let tipo = ["guerreiro", "mago", "monge", "ninja"]

class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
    if (this.tipo === "guerreiro") {
            console.log(`O ${this.tipo} atacou usando espada`)
    } else if (this.tipo === "mago") {
            console.log(`O ${this.tipo} atacou usando magia`)
    } else if (this.tipo === "monge") {
            console.log(`O ${this.tipo} atacou usando artes marciais`)
        } else if (this.tipo === "ninja") {
            console.log(`O ${this.tipo} atacou usando shuriken`)
        }
    }
}

let guerreiro = new heroi(nome, idade, tipo[0])
let mago = new heroi(nome, idade, tipo[1])
let monge = new heroi(nome, idade, tipo[2])
let ninja = new heroi(nome, idade, tipo[3])

guerreiro.atacar()
mago.atacar()
monge.atacar()
ninja.atacar()