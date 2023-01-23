import axios from "axios";
import {MovieInterface} from '../types'

const headers = {
  'Content-Type': 'application/json',
}
const URL = "https://nimbo-movies-backend.azurewebsites.net/movies"


export const getMovies= async()=> {
    return new Promise<MovieInterface>((resolve, reject) => {
        const headers = { "X-Test": "NimboPeru" };
        axios
          .get(URL, { headers })
          .then((res) => {
            resolve( res.data);
            
          })
          .catch((error) => {
            console.log("Something went wrong", error);
            reject([])
          });
        
    })

  }

export const deleteMovie= async(id:string)=> {
    return new Promise<MovieInterface>((resolve, reject) => {
        const headers = { "X-Test": "NimboPeru" };
        axios.delete(`https://nimbo-movies-backend.azurewebsites.net/movies/${id}`, { headers })
        .then(getMovies())
        .catch(error => {
          console.log("Something went wrong", error)
        })
    })
  }