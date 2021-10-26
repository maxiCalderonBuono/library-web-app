import axios from "axios";

const getBooks = async (setBooks, url) => {
  const urlApi = url;

  const userApi = axios.create();

  const resp = await userApi.get(urlApi);

  setBooks(resp.data);
};

export default getBooks;
