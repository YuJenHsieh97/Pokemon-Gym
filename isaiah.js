class Pokemon {
  constructor (name, hp, attack, defense, ability) {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.ability = ability;
  }

  display(){

    let name = document.getElementById('name' + this.name);
    name.innerHTML = this.name;

    let hp = document.getElementById('HP' + this.name);
    hp.innerHTML = "HP: " + this.hp;

    let attack = document.getElementById('Attack' + this.name);
    attack.innerHTML = "Attack: " + this.attack;

    let defense = document.getElementById('Defense' + this.name);
    defense.innerHTML = "Defense: " + this.defense;

    let ability = document.getElementById('Ability' + this.name);
    ability.innerHTML = "Ability: " + this.ability;
  }
}


let gallade_name;
let gallade_hp;
let gallade_attack;
let gallade_defense;
let gallade_ability;
let gallade;
axios.get("https://fizal.me/pokeapi/api/v2/name/gallade.json")
  .then(pokemon1)
  function pokemon1(response){
    gallade_name = response.data.species.name;
    gallade_hp = response.data.stats[5].base_stat;
    gallade_attack = response.data.stats[4].base_stat;
    gallade_defense = response.data.stats[3].base_stat;
    gallade_ability = response.data.abilities[0].ability.name;
    console.log(response.data);
    gallade = new Pokemon(gallade_name, gallade_hp, gallade_attack, gallade_defense, gallade_ability);
    gallade.display();
  }

let lucario_name;
let lucario_hp;
let lucario_attack;
let lucario_defense;
let lucario_ability;
let lucario;
axios.get("https://fizal.me/pokeapi/api/v2/name/lucario.json")
  .then(pokemon2)
  function pokemon2(response){
    lucario_name = response.data.species.name;
    lucario_hp = response.data.stats[5].base_stat;
    lucario_attack = response.data.stats[4].base_stat;
    lucario_defense = response.data.stats[3].base_stat;
    lucario_ability = response.data.abilities[0].ability.name;
    console.log(response.data);
    lucario = new Pokemon(lucario_name, lucario_hp, lucario_attack, lucario_defense, lucario_ability);
    lucario.display();
  }

let absol_name;
let absol_hp;
let absol_attack;
let absol_defense;
let absol_ability;
let absol;
axios.get("https://fizal.me/pokeapi/api/v2/name/absol.json")
  .then(pokemon3)
  function pokemon3(response){
    absol_name = response.data.species.name;
    absol_hp = response.data.stats[5].base_stat;
    absol_attack = response.data.stats[4].base_stat;
    absol_defense = response.data.stats[3].base_stat;
    absol_ability = response.data.abilities[0].ability.name;
    console.log(response.data);
    absol = new Pokemon(absol_name, absol_hp, absol_attack, absol_defense, absol_ability);
    absol.display();
  }

  class Trainer{
    constructor(pokemon){
      this.pokemon = [];
    }
    all(){
      return this.pokemon
    }
    add(data){
      this.pokemon.push(data)
    }
    get(name){
      for (let i = 0; i < this.pokemon.length; i++) {
        if (name === this.pokemon.length[i].name) {
          return this.pokemon[i];
        }
      }
    }
  }
  let dos = new Trainer();
