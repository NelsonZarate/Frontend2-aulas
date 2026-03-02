"use client";
import { TemaContext } from "@/components/layout/TemaContext";
import { useContext } from "react";
import BotaoTema from "./BotaoTema";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import CounterRedux from "@/redux/counter";
import Counter from "../ui/Counter";
import {motion} from "framer-motion"
const HomePage = () => {
	const { tema } = useContext(TemaContext);
	return (
		<motion.div 
		
		// initial={{opacity: 0 , x: -100 , y: -100}} animate={{ opacity: 1, x: 0,y: 0}} transition={{duration:1}}
		className={`flex min-h-screen items-center justify-center font-sans ${tema === "claro" ? "bg-zinc-50" : "bg-black"} `}>
			<h1> Home </h1>
			<CounterRedux />
      		<BotaoTema />
		</motion.div>
	)
}

export default HomePage;