import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-48 text-center">
      <p className="text-gray-500">Contador</p>
      <p className="text-2xl font-bold">{contador}</p>

      <button
        onClick={() => setContador((prev) => prev + 1)}
        className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700 transition"
      >
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
