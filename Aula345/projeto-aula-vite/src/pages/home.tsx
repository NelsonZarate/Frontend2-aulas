import ProfileCard from "../components/ProfileCard";
import { useNavigate } from "react-router-dom";
const Home = () => {
	const navigate = useNavigate();

	return (
		<div className="main-page">
			<h1> Home page </h1>
			<ProfileCard name='Nelson' email = "nelson@gmail.com" profilePic='/profilepic.jpeg' active={true}/>
			<button onClick={ () => navigate("/about")}> About </button>
		</div>
	)
}

export default Home;