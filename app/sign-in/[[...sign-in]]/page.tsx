import AuthLayout from "@/components/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout
      mode="sign-in"
      rightHeading={"Learn AI\nthe right way."}
      rightSub="Your company hub for AI tools, security guidelines, and best practices."
    />
  );
}
