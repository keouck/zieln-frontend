import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <section className="min-h-[87.5vh] flex items-center justify-center bg-slate-50">
      <SignIn />
    </section>
  );
}
