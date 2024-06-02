import Header from "@/app/components/globalcomponents/Header";
import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <Header />
      <main className="min-h-[110vh] pt-4 md:pt-0 w-full flex items-center justify-center bg-slate-50">
        <SignUp />
      </main>
    </>
  );
}
