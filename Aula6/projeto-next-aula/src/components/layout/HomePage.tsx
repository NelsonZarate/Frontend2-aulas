"use client";
import { TemaContext } from "@/components/layout/TemaContext";
import { useContext } from "react";
import BotaoTema from "./BotaoTema";

const HomePage = () => {
	const { tema } = useContext(TemaContext);
	return (
		<div className={`flex min-h-screen items-center justify-center font-sans ${tema === "claro" ? "bg-zinc-50" : "bg-black"} `}>
			<h1> Home </h1>
      		<BotaoTema />
		</div>
	)
}

export default HomePage;