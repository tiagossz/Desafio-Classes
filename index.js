// Classe Hero que representa um herói de aventura
class Hero {
    // Construtor que inicializa as propriedades nome, idade e tipo
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    // Método para realizar um ataque com base no tipo do herói
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case 'mago':
          ataque = 'usou magia';
          break;
        case 'guerreiro':
          ataque = 'usou espada';
          break;
        case 'monge':
          ataque = 'usou artes marciais';
          break;
        case 'ninja':
          ataque = 'usou shuriken';
          break;
        default:
          ataque = 'atacou';
      }
  
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criação de objetos herói
  const mago = new Hero('Merlin', 35, 'mago');
  const guerreiro = new Hero('Arthur', 30, 'guerreiro');
  const monge = new Hero('Lee', 28, 'monge');
  const ninja = new Hero('Hanzo', 25, 'ninja');
  
  // Chamando o método atacar para cada herói
  mago.atacar();
  guerreiro.atacar();
  monge.atacar();
  ninja.atacar();
  