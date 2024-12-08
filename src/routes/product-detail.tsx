import { useLoaderData } from "react-router";
import { getProductBySlug } from "@/module/db";
import { LoaderFunctionArgs } from "react-router";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const productLoader = async ({ params }: LoaderFunctionArgs) => {
  if (!params.slug) {
    throw new Error("Product slug is required");
  }
  const product = await getProductBySlug(params.slug);
  return { product };
};

export function Product() {
  const { product } = useLoaderData<typeof productLoader>();

  return (
    <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-8">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 my-8 lg:my-24">
        <div className="w-full lg:w-1/2">
          <Carousel className="w-full">
            <CarouselContent>
              {product.images.map(
                (image: { url: string; alt: string }, index: number) => (
                  <CarouselItem key={index}>
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                    />
                  </CarouselItem>
                )
              )}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>

        {/* Bagian Informasi Produk */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
            {product.name}
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-blue-600 mb-4 sm:mb-6">
            Rp {product.price}
          </p>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-4 sm:mb-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Product Description
            </h2>
            <p className="text-gray-600 text-sm sm:text-base mb-4">
              {product.description}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div>
                <p className="text-gray-500 text-sm sm:text-base">
                  Available Stock
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  {product.stock} unit
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm sm:text-base">
                  Product Weight
                </p>
                <p className="font-semibold text-sm sm:text-base">
                  {product.weight}g
                </p>
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-500 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-base">
            Add to Cart
          </button>
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500">
            <p>Added on: {new Date(product.createdAt).toLocaleDateString()}</p>
            <p>
              Last updated: {new Date(product.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
