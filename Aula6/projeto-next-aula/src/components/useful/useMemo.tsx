"use client";
import {useMemo, useState } from "react";

const Exemplo = () => {
	const [contador, setContador] = useState(0);

	const numeroPesado = useMemo(() => {
		console.log("Calculando...");
		return contador * 2;
	}, [contador]);
	return(
		<div> 
		<p> Resultado: {numeroPesado}</p>
		<button onClick={() => setContador(contador + 1 )}> Incrementar</button>
	</div>
);
};

export default Exemplo;