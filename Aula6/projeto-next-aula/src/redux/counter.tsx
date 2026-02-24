"use client";

import { useSelector,useDispatch } from "react-redux";
import {RootState} from "./store";
import { increment, decrement, incrementByAmount,reset } from "./counterSlice";

const CounterRedux = () => {
	const counter = useSelector((state: RootState) => state.counter.value);
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col items-center gap-4 bg-black text-white p-4 rounded">
			<p>Contador: {counter}</p>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(increment())}>Incrementar</button>
			<button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(decrement())}>Decrementar</button>
			<button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(incrementByAmount(5))}>Incrementar por 5</button>	
			<button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(reset())}> Reset</button>
		</div>
	)
}

export default CounterRedux;