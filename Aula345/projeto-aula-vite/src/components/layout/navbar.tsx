import { Link } from "react-router-dom"
const Navbar = () =>{
	return (
		<div className="navbar">
			<div className="logotipo">
				<p> Logotipo</p>
			</div>
			<nav>
				<Link to="/"> Home </Link>
				<Link to="/sobre">Sobre</Link>
			</nav>
		</div>
	)
}

export default Navbar