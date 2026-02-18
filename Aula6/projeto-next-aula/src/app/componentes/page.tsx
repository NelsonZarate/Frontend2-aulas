import MeuComponente from "@/components/useful/montado";
import Exemplo from "@/components/useful/useMemo";
import InputFocus from "@/components/useful/useRef";
export default async function Componentes() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex">
	  	<h1> Componentes </h1>
	  </div>
	  <div>
      	<MeuComponente />
	  </div>
	  <div>
	  	<Exemplo />
		<InputFocus />
	  </div>
    </div>
  );
}