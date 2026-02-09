import Link from "next/link"

const Navbar = () => {
	return(
		<div className="">
			Navbar
			<nav>
				<Link href="/about"> About </Link>
				<Link href="/"> Home </Link>
			</nav>
		</div>
	)	
}
export default Navbar