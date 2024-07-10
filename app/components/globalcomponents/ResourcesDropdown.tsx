/* eslint-disable @next/next/no-img-element */
import { AiOutlineApi } from "react-icons/ai";
import { BsFillHeartFill } from "react-icons/bs";
import {
  FiBookOpen,
  FiChevronDown,
  FiCode,
  FiHelpCircle,
  FiLayers,
  FiLifeBuoy,
  FiUsers,
} from "react-icons/fi";

export default function ResourcesDropDown() {
  return (
    <div className="hs-dropdown   [--adaptive:none] [--auto-close:true]  py-3 md:px-3 md:py-6">
      <button
        type="button"
        className="flex items-center w-full text-gray-800 hover:text-primary font-medium dark:text-neutral-200 dark:hover:text-neutral-500"
      >
        Resources
        <FiChevronDown className="flex-shrink-0 ms-2 size-4" />
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-neutral-800 dark:divide-neutral-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
        <div className="grid grid-cols-2 md:grid-cols-10">
          <div className="md:col-span-3">
            <div className="flex flex-col py-6 px-3 md:px-6">
              <div className="space-y-4">
                <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                  About us
                </span>

                <DropdownItem icon={<FiBookOpen />} text="Support Docs" />
                <DropdownItem icon={<FiLayers />} text="Integrations" />
                <DropdownItem icon={<FiCode />} text="Guides" />
                <DropdownItem icon={<AiOutlineApi />} text="API Reference" />
                <DropdownItem icon={<FiLifeBuoy />} text="API Status" />
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex flex-col py-6 px-3 md:px-6">
              <div className="space-y-4">
                <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                  Support
                </span>

                <DropdownItem icon={<FiHelpCircle />} text="Help Center" />
                <DropdownItem icon={<FiUsers />} text="Developer Hub" />
                <DropdownItem
                  icon={<BsFillHeartFill />}
                  text="Community Forum"
                />
              </div>
            </div>
          </div>

          <div className="col-span-full md:col-span-4">
            <div className="flex flex-col bg-gray-50 p-6 dark:bg-neutral-700">
              <span className="text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                Customer stories
              </span>

              <a className="mt-4 group" href="#">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full h-40 object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-gray-800 dark:text-neutral-200">
                    Outsmash empowers students by providing seamless access to
                    information about extra-curricular activities.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-gray-700 decoration-2 hover:underline font-medium ">
                    Learn more
                    <svg
                      className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DropdownItem = ({ icon, text }: any) => (
  <a
    href="#"
    className="flex gap-x-4 text-gray-700 hover:text-primary dark:text-neutral-200"
  >
    {icon}
    <div className="grow">
      <p>{text}</p>
    </div>
  </a>
);
