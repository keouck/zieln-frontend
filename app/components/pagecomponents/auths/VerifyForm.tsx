import { FormEvent } from "react";

interface VerifyFormProps {
  handleVerify: (e: FormEvent) => void;
  code: string;
  setCode: (value: string) => void;
}

const VerifyForm = ({ handleVerify, code, setCode }: VerifyFormProps) => {
  return (
    <div className="justify-center mt-12 grid justify-items-center md:mt-20">
      <div className="h-auto w-80 md:w-96">
        <div className="p-6 md:p-8">
          <h1 className="mb-6 text-3xl font-light text-black">
            Verification Code
          </h1>
          <form onSubmit={handleVerify}>
            <input
              value={code}
              className="text-center tracking-[1rem] w-full pb-2 px-4 mb-3  text-xl font-light bg-transparent border-0 border-b-2 h-37 border-black text-black caret-slate-700 outline-none"
              id="code"
              name="code"
              onChange={(e) => setCode(e.target.value)}
            />
            <div className="mt-8">
              <button
                className="w-full h-12 mb-6 text-sm font-light text-white hover:text-blue-900 hover:bg-white bg-primary rounded-md"
                type="submit"
              >
                Complete sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VerifyForm;
