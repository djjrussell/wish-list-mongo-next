import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import LoginForm from "@/components/forms/LoginForm";

const LoginPage = async () => {
  const session = await getServerSession(authOptions as any);

  if (session) {
    redirect("/experiences/auth/");
  }
  return <LoginForm />;
};

export default LoginPage;
