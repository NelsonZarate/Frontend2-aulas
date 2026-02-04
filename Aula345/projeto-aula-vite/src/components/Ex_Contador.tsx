import { useState , useEffect } from "react"
function ToggleContador () {
	const [contador, setContador] = useState(0);
	const [running, setRunning] = useState(true);
	useEffect(()=>{
		if (!running) return;
		
		const interval = setInterval(()=> {
			setContador((prev) => prev + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, [running])
	return (
		<div>
			<p> Contador: {contador}</p>
			<button onClick={() => setRunning(!running)}> { running ? "parar" : "continuar" }</button>
		</div>
	)
}

export default ToggleContador ;