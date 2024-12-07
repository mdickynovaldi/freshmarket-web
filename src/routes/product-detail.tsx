import { useLoaderData } from "react-router";
import { getProductBySlug } from "@/module/db";
import { LoaderFunctionArgs } from "react-router";

export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.slug) {
    throw new Error("Product slug is required");
  }
  const product = await getProductBySlug(params.slug);
  console.log(product);
  return { product };
};

export function Product() {
  const { product } = useLoaderData<typeof productLoader>();

  return (
    <div className="container mx-auto px-6 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img
            src={
              "https://s3-publishing-cmn-svc-prd.s3.ap-southeast-1.amazonaws.com/article/L_0LCFtvHjXicJvX6F9rv/original/003102700_1525316788-5-Buah-Ini-Harus-Ada-dalam-Menu-Harian-Anda-By-Alexander-Raths-shutterstock.jpg"
            }
            alt={product.name}
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-bold text-blue-600 mb-6">
            Rp {product.price}
          </p>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Deskripsi Produk</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500">Stok Tersedia</p>
                <p className="font-semibold">{product.stock} unit</p>
              </div>
              <div>
                <p className="text-gray-500">Berat Produk</p>
                <p className="font-semibold">{product.weight}g</p>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
            Tambah ke Keranjang
          </button>
          <div className="mt-4 text-sm text-gray-500">
            <p>
              Ditambahkan pada:{" "}
              {new Date(product.createdAt).toLocaleDateString()}
            </p>
            <p>
              Terakhir diupdate:{" "}
              {new Date(product.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
