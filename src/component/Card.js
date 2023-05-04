const Card = ({ onClose, user }) => {
  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-opacity-50 bg-gray-700 flex justify-center items-center z-50">
      <div className="relative">
        <button
          className="close-modal text-lg absolute right-3  rounded-sm text-white font-bold hover:text-black  "
          onClick={onClose}
        >
          &times;
        </button>
        <div className="flex flex-col rounded-lg bg-blue-400  md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={user.profile_image.medium}
            alt={user.name}
          />
          <div className="flex flex-col justify-start p-6">
            <div>
              <span className="font-bold">Name: </span>
              <span>{user.name}</span>
            </div>

            <div>
              <span className="font-bold">Location: </span>
              <span>{user.location}</span>
            </div>

            <div>
              <span className="font-bold mb-3">Total photo: </span>
              <span>{user.total_photos}</span>
            </div>
            <div>
              <a
                href={user.portfolio_url}
                type="submit"
                className="btn bg-white hover:text-blue-400 mt-3 ml-3 uppercase"
                target="_blank"
                rel="noreferrer"
              >
                portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
