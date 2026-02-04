import { useEffect, useState } from "react";

function Relogio(){
	const [hora, setHora]= useState(new Date().toLocaleTimeString('pt-PT', {
  hour: '2-digit',
  minute: '2-digit'
})
);

	useEffect(()=>{
		const interval = setInterval(() =>{
			setHora(new Date().toLocaleTimeString('pt-PT', {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
})
);
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return <p> Hora atual: {hora}</p>
}

export default Relogio;