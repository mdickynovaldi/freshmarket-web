import { BACKEND_API_URL } from "@/lib/env";
import { paths } from "@/schema";
import { Cookies } from "react-cookie";

export async function getUser() {
  try {
    const cookies = new Cookies();
    const token: string | undefined = cookies.get("token");

    console.log(token);

    const response = await fetch(`${BACKEND_API_URL}/users/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to get user: ${response.status}`);
    }

    const data: paths["/users/me"]["get"]["responses"][200]["content"]["application/json"] =
      await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function login(email: string, password: string) {
  const response = await fetch(`${BACKEND_API_URL}/users/login`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to login: ${response.status}`);
  }

  const data: paths["/users/login"]["post"]["responses"][200]["content"]["application/json"] =
    await response.json();

  return data;
}

export async function register(email: string, password: string) {
  const response = await fetch(`${BACKEND_API_URL}/users/register`, {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to register: ${response.status}`);
  }

  const data: paths["/users/register"]["post"]["responses"][200]["content"]["application/json"] =
    await response.json();

  return data;
}
