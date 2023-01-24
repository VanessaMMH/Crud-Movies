import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [year, setYear] = useState("");

  const navigate = useNavigate();
  const data = {
    title: title,
    description: description,
    year: year,
  };
  const headers = { "X-Test": "NimboPeru" };
  function submitForm(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    axios
      .post("https://nimbo-movies-backend.azurewebsites.net/movies", data, {
        headers,
      })
      .then(navigate("/"));
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center mt-16">
      <h2 className="text-2xl font-bold">ADD MOVIE</h2>
      <form className="w-[50%] h-full flex flex-col mt-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="text"
          placeholder="Enter the title of the movie"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="description"
          placeholder="Enter the description of the movie"
        />
        <input
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="bg-white/10 outline-none font-normal border border-zinc-400 py-6 pl-6 mt-4"
          type="year"
          placeholder="Enter the year of the movie."
        />
        <button
          className=" w-1/3 mt-8 mx-auto p-2.5 flex-1 justify-center items-center   border-indigo-600 text-indigo-500 rounded-md outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
          type="submit"
          onClick={submitForm}
        >
          ADD MOVIE
        </button>
      </form>
    </div>
  );
}

export default Add;
