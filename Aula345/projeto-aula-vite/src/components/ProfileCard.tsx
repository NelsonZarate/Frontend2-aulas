import { useState } from "react";

interface ProfileCardProps {
  name: string;
  email: string;
  profilePic: string;
  active?: boolean;
}

function ProfileCard({
  name,
  email,
  profilePic,
  active = false,
}: ProfileCardProps) {
  const [showImage, setShowImage] = useState(false);

  return (
    <div
      className={`rounded-xl p-4 w-72 shadow-lg text-center transition ${
        active ? "bg-green-600" : "bg-gray-600"
      }`}
    >
      <h2 className="text-2xl font-semibold text-white">{name}</h2>

      <p className="text-gray-200">{email}</p>

      {showImage && (
        <img
          src={profilePic}
          alt={name}
          className="mt-4 w-40 h-40 object-cover rounded-full mx-auto border-4 border-white"
        />
      )}

      <button
        onClick={() => setShowImage((v) => !v)}
        className="mt-4 bg-white text-black px-4 py-1 rounded hover:bg-gray-200 transition"
      >
        Toggle image
      </button>
    </div>
  );
}

export default ProfileCard;
