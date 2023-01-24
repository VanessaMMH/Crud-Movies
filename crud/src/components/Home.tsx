import axios from "axios";
import React, { useEffect, useState } from "react";
import { getMovies, deleteMovie } from "../services/index";
import { Link } from "react-router-dom";
import { EyeIcon } from "@heroicons/react/24/solid";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { TrashIcon } from "@heroicons/react/24/solid";

function Home() {
  const [movies, setMovies] = useState([]);
  const headers = { "X-Test": "NimboPeru" };
  function loadMovies() {
    const headers = { "X-Test": "NimboPeru" };
    axios
      .get("https://nimbo-movies-backend.azurewebsites.net/movies", { headers })
      .then((res) => {
        setMovies(res.data);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }

  useEffect(() => {
    loadMovies();
  }, []);
  // show Data;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();

        setMovies(response);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [setMovies]);

  function deleteMovie(id: string) {
    axios
      .delete(`https://nimbo-movies-backend.azurewebsites.net/movies/${id}`, {
        headers,
      })
      .then(loadMovies())
      .catch((error) => {
        console.log("Something went wrong", error);
      });
  }

  return (
    <>
      <div className="w-[100vw] h-full justify-center items-center flex flex-col px-10 py-8 mt-8">
        <h1 className="text-3xl font-bold">MOVIES TABLE</h1>
        <div className="flex flex-col">
          <div className="overflow-x-auto mt-8 sm:-mx-6 items-center lg:-mx-8">
            <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full text-center">
                  <thead className="border-b bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="text-sm font-medium text-white px-6 py-4"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Year
                      </th>
                      <th
                        scope="col"
                        className="text-sm font-lg text-white px-6 py-4"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="border-black border-b-2">
                    {movies ? (
                      movies.map((data, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b-2 border-black"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                            {index + 1}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {data.title}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {data.year}
                          </td>
                          <td className="text-xl text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            {data.description}
                          </td>
                          <td className="text-sm flex justify-between  items-center text-gray-900 font-bold px-6 py-4 space-x-4 whitespace-nowrap">
                            <Link to={`/movies/${data._id}`}>
                              <EyeIcon className="h-6 w-6 text-gray-500 " />
                            </Link>
                            <Link to={`/edit-movie/${data._id}`}>
                              <PencilSquareIcon className="h-6 w-6 text-indigo-500 " />
                            </Link>
                            <Link
                              onClick={() => deleteMovie(data._id)}
                              to={"#"}
                            >
                              <TrashIcon className="h-6 w-6 text-red-500 " />
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <h1>loading ... </h1>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
