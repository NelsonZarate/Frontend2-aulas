interface Post {
	title: string;
	content:string;
	datePublished: Date;
}
class PostContent{
	post: Post

	constructor (post: Post){
		this.post = post;

	}
}

const post = new PostContent({
  title: "titulo do post",
  content: "conteudo",
  datePublished: new Date("2026-02-02")
});


/// outra forma de fazer seria so com a classe sem extender nada da interface ou type


class Posts {
  title: string;
  content: string;
  datePublished: Date;

  constructor(title: string, content: string, datePublished:Date ) {
    this.title = title;
    this.content = content;
    this.datePublished = datePublished;
  }
}

const MeuPost = new Posts(
	"titulo do post",
	"conteudo do post", 
	new Date("01-02-2026")
) 


interface Animal {
	name: string,
	age: number,
	color: string
}

class Zoo<T>{
	animal: T;
	constructor(animal: T){
		this.animal=animal;
	}
}

const cao = new Zoo<Animal>({
	name: "Dog",
	age: 10,
	color:"black"
})

cao.animal.name;


type MiniAnimal = Pick<Animal, "name" | "age">