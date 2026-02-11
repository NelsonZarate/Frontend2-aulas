import { useState } from "react";

const Click = () => {
	const [contador , setContador] = useState(0);
	return (
		<div>
			<p> Clicks: {contador}</p>
			<button onClick={() => setContador(contador + 1 )}> Click here!</button>
		</div>
	);
};

export default Click;