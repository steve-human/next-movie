import axios from "axios";

const BASE_URL = "http://localhost:3000";
const CATEGORY_DATA = [
  { id: "c-1", name: "drama" },
  { id: "c-2", name: "action" },
  { id: "c-3", name: "adventure" },
  { id: "c-4", name: "historical" },
];

export const getCategories = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
      // reject('Cannot fetch data!')
    }, 50);
  });
};

export const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}/api/v1/movies`);
  return res.data;
};

export const createMovie = async (movie) => {
  const res = await axios.post(`${BASE_URL}/api/v1/movies`, movie);
  return res.data;
};

export const getMovieById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/v1/movies/${id}`);
  return res.data;
};
