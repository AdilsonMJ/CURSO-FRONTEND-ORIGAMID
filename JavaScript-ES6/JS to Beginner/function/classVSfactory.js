class Pessoa {
     constructor(nome){
          this.name = nome
     }
     falar(){console.log(`Meu nome é ${this.name}`)}
}

const p1 = new Pessoa('Joao')
p1.falar()

const pessoaFactory = nome => {
     return {
          falar: () => console.log(`Meu nome é ${nome}`)
     }
}

const p2 = pessoaFactory('Lu')
p2.falar()
