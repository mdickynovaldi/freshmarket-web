import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

export function NotFound() {
  return (
    <>
      <div className="flex flex-col h-screen justify-between">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center text-gray-500 ">
            404 - Page Not Found
          </h1>
        </main>
        <Footer />
      </div>
    </>
  );
}
