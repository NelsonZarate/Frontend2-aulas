async function getDados(){
  const resposta = await fetch("jsonplaceholder.typicode.com/posts")
  return resposta.json();
  
}

export default async function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    </div>
  );
}
