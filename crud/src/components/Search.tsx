import axios from "axios";
import React, { useState, useEffect } from "react";
import {getMovies} from '../services/index'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
  //setear los hooks useState
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");


  //función de búsqueda
  const searcher = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  //metodo de filtrado 2
  const results = !search
    ? movies
    : movies.filter(
        (dato) =>
         
          dato.title.toLowerCase().includes(search.toLocaleLowerCase()) ||
          dato.description.toLowerCase().includes(search.toLocaleLowerCase())
          
          );

 
    // show Data;
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getMovies()
  
          setMovies(response);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [setMovies]);



  //renderizamos la vista
  return (
    <div className="container  ">
      <div className="flex items-center justify-center my-4">
        <div className="flex border-2 rounded items-center">
        <MagnifyingGlassIcon className="h-6 w-6 mx-2 text-gray-600"/>
        <input
            value={search}
            onChange={searcher}
            type="text"
            placeholder="Search movie ..."
            className="px-4 py-2 w-80" 
          />
        </div>
      </div>


      <div className="flex flex-col ">
        <div className="w-full ">
          <div className="border-b border-gray-200 shadow ">
            <table className="divide-y divide-gray-300 ">
              <thead>
                <tr className="bg-slate-700 ">
                  <th className="px-6 py-2 text-xs text-gray-100">Title</th>
                  <th className="px-6 py-2 text-xs text-gray-100">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-300">
                {results.map((movie) => (
                  <tr key={movie._id} className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {movie.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {movie.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
