"use client";
import { useContext } from "react";
import { TemaContext } from "./TemaContext";

const BotaoTema = () => {
	const { tema, setTema } = useContext(TemaContext);

	const alternarTema = () => {
		console.log(tema);
		setTema(tema === "claro" ? "escuro" : "claro");
	}

	return (
		<button className="rounded-lg border-2 p-2 cursor-pointer bg-blue-500 text-white hover:bg-blue-600" onClick={alternarTema}>Alternar tema : {tema}</button>
	)
}

export default BotaoTema;