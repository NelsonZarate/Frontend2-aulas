"use client";
import Link from "next/link"
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
const Navbar = () => {
	const count = useSelector((state: RootState) => state.cart?.items?.length ?? 0);
	return(
		<div className="">
			Navbar
			<nav>
				<Link href="/"> Home </Link>
				<Link href="/about"> About </Link>
				<Link href="/posts"> Posts </Link>
				<Link href="/componentes"> Componentes </Link>
				<Link href="/cart"> Carrinho ({count}) </Link>
			</nav>
		</div>
	)    
}
export default Navbar