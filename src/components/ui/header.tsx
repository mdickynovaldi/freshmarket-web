import { Link } from "react-router";

export function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-gray-800">
            FreshMarket
          </Link>
          <div className="flex items-center">
            <Link
              to="/products"
              className="text-gray-600 hover:text-gray-800 mx-4"
            >
              Products
            </Link>
            <Link
              to="/categories"
              className="text-gray-600 hover:text-gray-800 mx-4"
            >
              Categories
            </Link>
            <Link to="/cart" className="text-gray-600 hover:text-gray-800 mx-4">
              Cart
            </Link>
            <Link
              to="/profile"
              className="text-gray-600 hover:text-gray-800 mx-4 p-2 border-2 border-gray-300 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
