const apiUrl = "https://v2.api.noroff.dev/online-shop";

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
