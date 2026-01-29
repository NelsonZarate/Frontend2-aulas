//interface
interface User {
	name: string;
	location?: string;
	age?: number;
	email?: string;
}

const nelson: User = {
	name: "nelson",
	location: "ad",
	age : 18,
	email:"nelson@gmail.com"
};

//type
type pessoa1 = {name: string};
type pessoa2 = {age: number};

type pessoa3 = pessoa1 & pessoa2;

const diogo : pessoa3 = {
	name: "diogo",
	age:21
};