interface CardProps {
  title: string;
  description: string;
  buttonName: string;
}

function Card({ title, description, buttonName }: CardProps) {
  return (
    <div className="bg-black text-white rounded-xl p-6 w-64 flex flex-col gap-4 shadow-lg">
      <h2 className="text-xl font-semibold">{title}</h2>

      <p className="text-gray-300 text-sm">{description}</p>

      <button
        onClick={() => alert("you clicked me")}
        className="mt-auto bg-white text-black py-2 rounded hover:bg-gray-200 transition"
      >
        {buttonName}
      </button>
    </div>
  );
}

export default Card;
