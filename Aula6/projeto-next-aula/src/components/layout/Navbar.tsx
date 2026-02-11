import Link from "next/link"

const Navbar = () => {
	return(
		<div className="">
			Navbar
			<nav>
				<Link href="/"> Home </Link>
				<Link href="/about"> About </Link>
				<Link href="/posts"> Posts </Link>

			</nav>
		</div>
	)	
}
export default Navbar