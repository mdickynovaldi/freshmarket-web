import { Outlet } from "react-router";

import { Header } from "@/components/ui/header";
import { Footer } from "@/routes/footer";

export function Root() {
  return (
    <main>
      <Header />
      <Outlet />
      <Footer />
    </main>
  );
}
