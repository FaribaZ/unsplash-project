import { useState } from "react";
import Card from "./Card";
const Avatar = (props) => {
  const [showCard, setShowCard] = useState(false);

  const showCardHandler = () => {
    setShowCard(true);
    document.body.style.overflow = "hidden";
  };
  const onClose = () => {
    setShowCard(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className="relative grid grid-cols-2">
      <div className=" p-2">
        <img
          src={props.user.profile_image.large}
          alt={props.user.name}
          className="w-20 rounded-full shadow mb-5"
        />
        <div className="text-xs text-left ml-8 capitalize">
          {props.user.first_name}
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute bottom-1 ml-1 mt-2 "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
        </div>
      </div>
      <div className="mt-6 text-left text-xs">
        <div className="mb-3">
          <span className="font-bold">Location:</span> {props.user.location}
        </div>
        <div className="mt-3">
          <span className="font-bold mt-3">Total likes: </span>
          <span>{props.user.total_likes}</span>
        </div>
        <div className="mt-3">
          <span className="font-bold mt-3">Profile: </span>
          <button
            className="text-blue-500"
            onClick={() => {
              showCardHandler();
            }}
          >
            Click here
          </button>
        </div>
      </div>
      {/* Render the card component only if showCard is true */}

      {showCard && (
        <Card setShowCard={setShowCard} onClose={onClose} user={props.user} />
      )}
    </div>
  );
};

export default Avatar;
