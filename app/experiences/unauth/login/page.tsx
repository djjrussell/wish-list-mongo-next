import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/components/LoginForm";

const LoginPage = async () => {
  const session = await getServerSession(authOptions as any);

  if (session) {
    redirect("/experiences/auth/");
  }
  return <LoginForm />;
};

export default LoginPage;
