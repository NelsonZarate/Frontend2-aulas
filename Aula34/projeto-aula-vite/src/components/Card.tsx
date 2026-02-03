const cardStyle = {
	width: "250px",
	backgroundColor: "black",
	color:"white",
	borderRadius:"12px"
};
const titleStyle = {
	color:"white",
	fontSize:"24px",
};

const descriptionStyle = {
	
}

const Card = ({title , description, buttonName}: {title: string, description: string,buttonName:string}) => {
	return <div style={cardStyle}>
	<h2 style={titleStyle}> {title}</h2>
	<div style={descriptionStyle}> {description}</div>
	<button onClick={()=>{alert('you clicked me');}}> {buttonName}</button>
	</div>
};

export default Card