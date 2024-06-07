import {
  IoLocationOutline,
  IoMailOutline,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="bg-gray-100 component-px component-py">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* contact infos  */}
        <div className="space-y-8">
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h1 className="component-heading">Contact us</h1>
            <p className="mt-1 text-neutral-400">
              Whatever your goal - we will get you there.
            </p>
          </div>
          <div className="flex items-center gap-x-5">
            <IoLocationOutline className="text-xl lg:text-3xl" />
            <div className="grow">
              <h4 className="font-semibold">Our Address:</h4>
              <address className="mt-1 text-neutral-400 text-sm not-italic">
                Glasgow G2 4JR, United Kingdom
              </address>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <IoMailOutline className="text-xl lg:text-3xl" />
            <div className="grow">
              <h4 className="font-semibold">Email us:</h4>
              <a
                className="mt-1 text-neutral-400 text-sm"
                href="mailto:example@site.co"
                target="_blank"
              >
                hello@example.so
              </a>
            </div>
          </div>
          <div className="flex items-center gap-x-5">
            <IoPhonePortraitOutline className="text-xl lg:text-3xl" />
            <div className="grow">
              <h4 className="font-semibold">Call us:</h4>
              <p className="mt-1 text-neutral-400 text-sm">+1234567890</p>
            </div>
          </div>
        </div>
        {/* contact form  */}
        <div className="flex items-center w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
