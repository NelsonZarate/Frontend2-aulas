import { useEffect, useState } from "react";

function ToggleContador() {
  const [contador, setContador] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const interval = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-52 text-center">
      <p className="text-gray-500">Toggle Contador</p>
      <p className="text-2xl font-bold">{contador}</p>

      <button
        onClick={() => setRunning((r) => !r)}
        className={`mt-3 px-4 py-1 rounded text-white transition ${
          running
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {running ? "Parar" : "Continuar"}
      </button>
    </div>
  );
}

export default ToggleContador;
