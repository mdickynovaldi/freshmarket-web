import { BACKEND_API_URL } from "@/lib/env";
import { paths } from "@/schema";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: string;
  description: string;
  stock: number;
  weight: number;
  createdAt: string;
  updatedAt: string;
  images: {
    url: string;
    alt: string;
  };
};

export async function getAllProducts() {
  try {
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
