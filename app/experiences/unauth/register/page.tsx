import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import RegisterForm from "@/components/RegisterForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const RegisterPage = async () => {
  const session = await getServerSession(authOptions as any);

  if (session) {
    redirect("/experiences/auth/");
  }

  return <RegisterForm />;
};

export default RegisterPage;
