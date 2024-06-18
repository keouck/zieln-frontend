/* eslint-disable @next/next/no-img-element */
import PageLayout from "@/app/components/globalcomponents/PageLayout";
import { PrimaryButton } from "./components/globalcomponents/Buttons";

export default function NotFound() {
  return (
    <PageLayout>
      <section className="component-px component-py flex justify-center items-center bg-gray-100">
        <div className="text-center mt-4 lg:mt-8 ">
          <img src="/images/error.svg" alt="Error" />
          <p className="text-lg text-gray-600 mb-6 mt-4 lg:mt-8">
            It looks like the page you’re looking for doesn&apos;t exist or the
            URL might be incorrect.
          </p>
          <div className=" flex justify-center space-x-4">
            <PrimaryButton buttonName="Go to Home" link="/" />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
