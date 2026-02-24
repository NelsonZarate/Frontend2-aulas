"use client";
import { TemaContext } from "@/components/layout/TemaContext";
import { useContext } from "react";
import BotaoTema from "./BotaoTema";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CounterRedux from "@/redux/counter";
import Counter from "../ui/Counter";
const HomePage = () => {
	const { tema } = useContext(TemaContext);
	return (
		<div className={`flex min-h-screen items-center justify-center font-sans ${tema === "claro" ? "bg-zinc-50" : "bg-black"} `}>
			<h1> Home </h1>
			<CounterRedux />
      		<BotaoTema />
		</div>
	)
}

export default HomePage;