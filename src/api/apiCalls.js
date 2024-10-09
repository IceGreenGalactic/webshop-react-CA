import { API_BASE_URL } from "./api_constants";

const apiUrl = API_BASE_URL;

// Fetches all products from the API
export async function fetchAllProducts() {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
}

export const fetchSingleProduct = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
