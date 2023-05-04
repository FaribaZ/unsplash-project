import { useState } from "react";
import Avatar from "./Avatar";

const Image = (props) => {
  const [showSvg, setShowSvg] = useState(false);
  const [avatar, setAvatar] = useState("");

  const handleMouseOver = () => {
    setShowSvg(true);
  };
  const handleMouseLeave = () => {
    setShowSvg(false);
  };

  return (
    <div className="mx-4 grid ">
      <div className="card ">
        <img
          src={props.urls.full}
          alt={props.alt_description}
          className="h-52 w-full object-cover rounded-2xl p-1 md:h-80 transition duration-500 opacity-100 hover:opacity-50 "
          onMouseOver={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        />

        {showSvg && (
          <div className="relative ">
            <div className="w-6 h-6 hover:cursor-pointer absolute items-center bottom-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <a href={props.links.download} target="_blank" rel="noreferrer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0l3-3m-3 3V2.25"
                  />
                </svg>
              </a>
            </div>
          </div>
        )}

        <Avatar avatar={avatar} setAvatar={setAvatar} user={props.user} />
      </div>
    </div>
  );
};

export default Image;
