import { useState } from "react";

const Search = ({ setLoading, setError, setImages }) => {
  const [name, setName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${name}&client_id=gPqt1QHzkHW_1nM2ee1tCHyQWyYOkqqbtPzi9-Z3WO0`
      );
      const data = await response.json();
      setImages(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="mb-5 pt-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 rounded-lg  p-2"
          placeholder="Search an image"
          id="photo-name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button
          type="submit"
          className="btn bg-gray-50 border border-gray-300 rounded-lg ml-3 py-1"
        >
          Go
        </button>
      </form>
    </div>
  );
};

export default Search;
