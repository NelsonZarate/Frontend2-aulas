type Player = {
	name: string,
	age: number,
	game: string
}

const jogador : Player = {
	name: "Dioginho gameplays", 
	age: 23,
	game: "Valorant"
}

const partial : Partial<Player> = {name: "Joao"}

const readonly: Readonly<Player> = {
	name: "dioginho",
	age: 23,
	game: "Valorant"
};

const pick : Pick<Player,"name"> = {name : "diogo"}

const omit : Omit<Player,"age" | "game"> = {name: "diogo"}



// exercicio 2


class Veiculo{
	marca:string
	modelo: string
	ano: number

	constructor(marca: string, modelo:string, ano: number){
		this.marca = marca,
		this.modelo =modelo,
		this.ano = ano
	}
	description():string{
		return `Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`;
	}
}

class Carro	extends Veiculo {
	portas:number
	constructor(marca: string, modelo:string, ano: number,portas: number){
		super(marca,modelo,ano);
		this.portas = portas;
	}
	description(): string {
    return `${super.description()} com ${this.portas} portas.`;
  }
}

const meuCarro = new Carro ("Volkswagen","Golf 4",997,4)

console.log(meuCarro.description())

class ListHandler<T>{
	array:T[]
	constructor(array:T[]){
		this.array = array;
	}

	add(valor:T){
		this.array.push(valor);
    	return this.array;

	}

	remove(valor:T){
		const index = this.array.indexOf(valor);
		if (index !== -1){
			this.array.splice(index, 1);
			return `valor ${valor} foi removido com sucesso`;
		}
		return `valor ${valor} não foi encontrado`;
	}
	getAll(){
		return console.log(this.array)
	}
}

const numbers = new ListHandler<number>([1, 2, 3]);
numbers.add(4);
numbers.remove(3);
numbers.getAll();

const strings = new ListHandler<string>(['a', 'b']);
strings.add('c');
strings.remove('b');
strings.getAll();

console.log(numbers);
console.log(strings)
