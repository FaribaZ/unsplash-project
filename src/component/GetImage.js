import { useState } from "react";
import Image from "./Image";
import Search from "./Search";
const GetImg = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);

  return (
    <div
      className="min-h-screen bg-cover"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1604079628040-94301bb21b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80")`,
      }}
    >
      <Search
        setLoading={setLoading}
        setError={setError}
        setImages={setImages}
      />
      {loading && (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
      )}
      {error && <div>error</div>}
      {images && (
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          {images.map((images) => (
            <Image key={images.id} {...images} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GetImg;
