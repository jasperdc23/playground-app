import AuthLayout from "@/components/auth-layout";

export default function SignInPage() {
  return (
    <AuthLayout
      mode="sign-in"
      heading="Welcome back"
      subheading="Sign in to your Eplayment account"
      rightHeading={"Learn AI\nthe right way."}
      rightSub="Your company hub for AI tools, security guidelines, and best practices."
    />
  );
}
