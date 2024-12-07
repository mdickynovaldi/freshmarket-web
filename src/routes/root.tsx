import { Outlet } from "react-router";

import { Header } from "@/components/ui/header";

export function Root() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}
