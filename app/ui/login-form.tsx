import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { lusitana } from "@/app/ui/fonts";

export default function LoginForm() {
  return (
    <Card>
      <form className="space-y-2">
        <CardDescription>
          <CardHeader>
          <h1 className={`${lusitana.className} text-2xl`}>
          Please log in to continue.
        </h1>
          </CardHeader>
          <CardContent>
          <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email or username"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                required
                minLength={6}
              />
            </div>
          </div>
        </div>
          </CardContent>
        </CardDescription>
      </form>

      <CardFooter>
        <Button>Login</Button>
      </CardFooter>
    </Card>
  );
}
