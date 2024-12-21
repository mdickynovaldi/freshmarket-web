import { Button } from "@/components/ui/button";
import { getUser } from "@/modules/user";
import { Cookies } from "react-cookie";

export async function profileLoader() {
  const user = await getUser();

  return { user };
}

export async function logout() {
  const cookies = new Cookies();
  cookies.remove("token");
  window.location.href = "/login";
}

export function Profile() {
  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="text-5xl font-bold text-center">Profile</h1>
      <Button className="mt-10  " onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
}
