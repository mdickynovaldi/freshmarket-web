import { Outlet } from "react-router";

import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

export function Root() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-[1]">
        <Outlet />
      </main>
      <Footer />
    </main>
  );
}
