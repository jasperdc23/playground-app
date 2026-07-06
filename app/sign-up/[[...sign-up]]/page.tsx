import AuthLayout from "@/components/auth-layout";

export default function SignUpPage() {
  return (
    <AuthLayout
      mode="sign-up"
      rightHeading={"Start your\nAI journey."}
      rightSub="Tools, guidelines, and step-by-step guides — all in one place."
    />
  );
}
