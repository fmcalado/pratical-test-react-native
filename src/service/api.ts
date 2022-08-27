import axios from "axios";

const API_KEY = "api-key=vi0bsV0yOCA9qYnmAaOUJV4dO0BNhUGR";
const BASE_URL = "https://api.nytimes.com/svc/books/v3/lists";

export interface BookData {
  book_image: string;
  title: string;
  author: string;
  description: string;
}
export interface BookListData {
  display_name: string;
  list_name_encoded: string;
  books: BookData[];
}

interface BookLists {
  lists: BookListData[];
}

export interface CategoryItem {
  display_name: string;
  list_name_encoded: string;
}

async function getBookLists() {
  const response = await axios.get<{ results: BookLists }>(
    `${BASE_URL}/overview.json?${API_KEY}`
  );

  return response.data.results.lists;
}

async function getCategories() {
  const response = await axios.get<{
    results: CategoryItem[];
  }>(`${BASE_URL}/names.json?${API_KEY}`);

  return response.data.results;
}

export const api = {
  getBookLists,
  getCategories,
};
