import { BACKEND_API_URL } from "@/lib/env";
import { paths } from "@/schema";

export async function getAllProducts() {
  try {
    console.log(BACKEND_API_URL);
    const response = await fetch(`${BACKEND_API_URL}/products`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.status}`);
    }

    const data: paths["/products"]["get"]["responses"][200]["content"]["application/json"] =
      await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const response = await fetch(`${BACKEND_API_URL}/products/${slug}`, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    const data: paths["/products/:slug"]["get"]["responses"][200]["content"]["application/json"] =
      await response.json();

    return data;
  } catch (error) {
    console.error("Error mengambil data:", error);
    throw error;
  }
}
