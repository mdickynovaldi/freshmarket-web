import { Link, useLoaderData } from "react-router";
import { getAllProducts } from "@/modules/product";

export async function loader() {
  const products = await getAllProducts();

  return { products };
}

export function Home() {
  const { products } = useLoaderData<typeof loader>();

  if (!products) {
    return (
      <section>
        <h1>Products data not available</h1>
      </section>
    );
  }

  return (
    <div>
      <section id="hero">
        <div className="bg-gray-100">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Welcome to ModernShop
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Discover our latest collection of trendy products.
                </p>
                <Link
                  to="/products"
                  className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                >
                  Shop Now
                </Link>
              </div>
              <div className="md:w-1/2 mt-8 md:mt-0">
                <img
                  src="https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/L_0LCFtvHjXicJvX6F9rv/original/003102700_1525316788-5-Buah-Ini-Harus-Ada-dalam-Menu-Harian-Anda-By-Alexander-Raths-shutterstock.jpg"
                  alt="Hero"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="featured-products">
        <div className="bg-white">
          <div className="container mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">
              Featured Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Link
                  to={`/product/${product.slug}`}
                  key={product.id}
                  className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition duration-300"
                >
                  <div className="mb-4">
                    <img
                      src={product.images[0]?.url}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <h1 className="text-xl font-bold text-gray-800 mb-2">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <p className="text-lg font-bold text-blue-600 mb-2">
                    Rp {product.price}
                  </p>
                  <div className="text-sm text-gray-500">
                    <p>Stok: {product.stock}</p>
                    <p>Berat: {product.weight}g</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
