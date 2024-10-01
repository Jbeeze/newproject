import { Metadata } from "next";

import LoginForm from "../ui/login-form";

export const metadata: Metadata = {
  title: "Login",
};


export default function Login() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-center md:h-screen">
    <div className="flex flex-col items-center justify-center">
        <LoginForm />
    </div>
  </main>
  )
}

