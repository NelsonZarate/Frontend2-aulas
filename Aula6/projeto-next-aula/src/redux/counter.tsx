"use client";

import { useSelector,useDispatch } from "react-redux";
import {RootState} from "./store";
import { increment, decrement, incrementByAmount,reset } from "./counterSlice";
import {motion} from "framer-motion"
const CounterRedux = () => {
	const counter = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<motion.div 
		           animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1]
            }}
		className="flex flex-col items-center gap-4 bg-black text-white p-4 rounded">
			<p>Contador: {counter}</p>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>Incrementar</button>
			<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>Decrementar</button>
			<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(incrementByAmount(5))}>Incrementar por 5</button>	
			<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(reset())}> Reset</button>
		</motion.div>
	)
}

export default CounterRedux;