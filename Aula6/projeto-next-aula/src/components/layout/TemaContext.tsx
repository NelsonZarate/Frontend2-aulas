"use client";
import { createContext, useState, ReactNode } from "react";

export const TemaContext = createContext<{
	tema: string;
	setTema: (tema: string) => void;
}>({
	tema: "claro",
	setTema: () => {}
});

export const TemaProvider = ({ children }: { children: ReactNode }) => {
	const [tema, setTema] = useState("claro");
	return (
		<TemaContext.Provider value={{ tema, setTema }}>
			{children}
		</TemaContext.Provider>
	)
};