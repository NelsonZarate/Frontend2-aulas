import { useEffect, useState } from "react";

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-48 text-center">
      <p className="text-gray-500">Hora atual</p>
      <p className="text-xl font-semibold">
        {hora.toLocaleTimeString("pt-PT", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </p>
    </div>
  );
}

export default Relogio;
