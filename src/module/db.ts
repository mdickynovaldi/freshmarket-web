export async function getAllProducts() {
  try {
    const response = await fetch("http://localhost:3000/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error mengambil data:", error);
    throw error;
  }
}

export async function getProductBySlug(slug: string) {
  try {
    const response = await fetch(`http://localhost:3000/products/${slug}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Gagal mengambil data: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error mengambil data:", error);
    throw error;
  }
}
