const cardStyle = {
	padding: "6px",
	backgroundColor: "purple",
	borderRadius:"10px",
};
const cardStyleActive = {
	padding: "6px",
	backgroundColor: "red",
	borderRadius:"10px",
}
const nameStyle = {
	fontSize: "24px",
	color:"white",
};
const emailStyle = {
	fontSize:"40px",
	color:"black",
};
const profilePicStyle = {
	width:"250px",
	height:"250px",
};
const ProfileCard = ({
	name,
	email,
	profilePic,
	active = false
	}: {
	name:string, 
	email: string, 
	profilePic:string , 
	active?: boolean
	}) => {
	return <div style = { active ? cardStyle : cardStyleActive}> 
		<h2 style={nameStyle}> {name}</h2>
		<div style={emailStyle}>{email}</div>
		<img style={profilePicStyle} src={profilePic} />
	</div>;
};

export default ProfileCard;