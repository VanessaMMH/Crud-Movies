import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ViewMovies() {
  const { id } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const headers = { "X-Test": "NimboPeru" };
    axios
      .get(`https://nimbo-movies-backend.azurewebsites.net/movies/${id}`, {
        headers,
      })
      .then((res) => {
        setMovie(res.data);
      });
  }, [id]);

  return (
    <>
      <div className="h-full w-full flex flex-col mt-12 justify-center items-center">
        {movie ? (
          <div className="w-[700px] h-[200] px-6 py-4  flex shadow-xl  justify-center items-center mt-16 border-zinc-400 border-2">
            <div className="w-5/12 flex flex-col space-y-4  ">
              <h2 className="text-black font-bold text-3xl">Title</h2>
              <h2 className="text-black font-bold text-3xl ">Description</h2>
              <h2 className="text-black font-bold text-3xl ">Year</h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4  ">
              <h2 className="text-zinc-900 font-bold text-3xl border-zinc-400 border-b-2">
                {movie.title}
              </h2>
              <h2 className="text-zinc-900 font-bold text-3xl border-zinc-400 border-b-2">
                {movie.description}
              </h2>
              <h2 className="text-zinc-900 font-bold text-3xl border-zinc-400 border-b-2">
                {movie.year}
              </h2>
            </div>
          </div>
        ) : (
          <h1>loading ... </h1>
        )}
        <Link
          to={`/`}
          className="  mt-8 mx-auto p-2.5 flex-1 justify-center items-center   border-indigo-600 text-indigo-500 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
        >
          Back To Home
        </Link>
      </div>
    </>
  );
}

export default ViewMovies;
