import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/modules/user";
import { Cookies } from "react-cookie";
import { Link } from "react-router";
import { ActionFunctionArgs } from "react-router";

const loginSchema = z.object({
  email: z.string().email("Email not valid"),
  password: z.string().min(6, "Password not valid"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const result = await login(email, password);
    return { data: result };
  } catch (error) {
    return {
      error: error,
    };
  }
}

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = async (data: LoginFormValues) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await loginAction({
      request: new Request("", { method: "POST", body: formData }),
      params: {},
    });

    if (result.error) {
      console.error(result.error);
    } else {
      new Cookies().set("token", result.data?.token, {
        path: "/",
        maxAge: 86400,
        secure: true,
        sameSite: "strict",
      });
      window.location.href = "/";
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Login</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" {...register("password")} />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-center gap-5 flex-col w-full items-center">
            <Button type="submit" className="w-full">
              Log in
            </Button>
            <Link to="/register" className="text-center">
              Register
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
