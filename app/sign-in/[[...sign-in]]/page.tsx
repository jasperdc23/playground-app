import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex-1 flex items-center justify-center py-20 pt-24">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-indigo-600/15 rounded-full blur-[100px]" />
      </div>
      <SignIn />
    </main>
  );
}
