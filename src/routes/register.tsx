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
import { Label } from "@/components/ui/label";
import { register } from "@/modules/user";
import { zodResolver } from "@hookform/resolvers/zod";

import { Cookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { ActionFunctionArgs, Link } from "react-router";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email("Email not valid"),
  password: z.string().min(8, "Password not valid"),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export async function registerAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const result = await register(email, password);
    return { data: result };
  } catch (error) {
    return {
      error: error,
    };
  }
}

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });
  const onSubmit = async (data: RegisterFormValues) => {
    const formData = new FormData();
    formData.append("email", data.email);
    formData.append("password", data.password);

    const result = await registerAction({
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
        <CardTitle className="text-2xl font-bold">Register</CardTitle>
        <CardDescription>
          Enter your credentials to register your account
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
              Register
            </Button>
            <Link to="/login" className="text-center">
              Login
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}
