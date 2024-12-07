import { Link } from "react-router";

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-white mb-4">404</h1>
        <p className="text-2xl text-purple-200 mb-8">
          Waduh! Sepertinya kamu tersesat...
        </p>
        <div className="space-y-4">
          <p className="text-purple-300">
            Halaman yang kamu cari tidak ditemukan 🤔
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-purple-500 hover:bg-purple-600 
                       text-white rounded-lg transition-colors duration-200"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
