/* eslint-disable @next/next/no-img-element */
export default function ResourcesDropDown() {
  return (
    <div className="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:px-3 md:py-6">
      <button
        type="button"
        className="flex items-center w-full text-grayy-700 hover:text-primary font-medium dark:text-neutral-200 dark:hover:text-neutral-500"
      >
        Resources
        <svg
          className="flex-shrink-0 ms-2 size-4"
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
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <div className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-[705px] lg:w-[750px] hidden z-10 top-full end-0 overflow-hidden bg-white md:shadow-2xl rounded-lg dark:bg-neutral-800 dark:divide-neutral-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
        <div className="grid grid-cols-2 md:grid-cols-10">
          <div className="md:col-span-3">
            <div className="flex flex-col py-6 px-3 md:px-6">
              <div className="space-y-4">
                <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                  About us
                </span>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                  <div className="grow">
                    <p>Support Docs</p>
                  </div>
                </a>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <rect width="7" height="7" x="14" y="3" rx="1" />
                    <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                  </svg>
                  <div className="grow">
                    <p>Integrations</p>
                  </div>
                </a>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" x2="8" y1="13" y2="13" />
                    <line x1="16" x2="8" y1="17" y2="17" />
                    <line x1="10" x2="8" y1="9" y2="9" />
                  </svg>
                  <div className="grow">
                    <p>Guides</p>
                  </div>
                </a>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="m7 11 2-2-2-2" />
                    <path d="M11 13h4" />
                    <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                  </svg>
                  <div className="grow">
                    <p>API Reference</p>
                  </div>
                </a>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                  <div className="grow">
                    <p>API Status</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="flex flex-col py-6 px-3 md:px-6">
              <div className="space-y-4">
                <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                  Support
                </span>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <circle cx="12" cy="12" r="10" />
                    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                    <path d="M12 17h.01" />
                  </svg>
                  <div className="grow">
                    <p>Help Center</p>
                  </div>
                </a>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <circle cx="12" cy="12" r="4" />
                    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
                  </svg>
                  <div className="grow">
                    <p>Developer Hub</p>
                  </div>
                </a>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  <div className="grow">
                    <p>Community Forum</p>
                  </div>
                </a>
              </div>

              <div className="mt-7 space-y-4">
                <span className="mb-2 text-xs font-semibold uppercase text-gray-800 dark:text-neutral-200">
                  Partners
                </span>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="M4 7V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-6" />
                    <polyline points="14 2 14 8 20 8" />
                    <path d="M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                    <path d="M7 16.5 8 22l-3-1-3 1 1-5.5" />
                  </svg>
                  <div className="grow">
                    <p>Become a Partner</p>
                  </div>
                </a>

                <a
                  className="flex gap-x-4 text-gray-800 hover:text-blue-600 dark:text-neutral-200"
                  href="#"
                >
                  <svg
                    className="flex-shrink-0 size-4"
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
                    <path d="m15 5 4 4" />
                    <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                    <path d="m8 6 2-2" />
                    <path d="m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z" />
                    <path d="m18 16 2-2" />
                    <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                  </svg>
                  <div className="grow">
                    <p>Build on Preline</p>
                  </div>
                </a>
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
                    className="w-full object-cover rounded-lg"
                    src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                    alt="Image Description"
                  />
                </div>
                <div className="mt-2">
                  <p className="text-gray-800 dark:text-neutral-200">
                    Preline Projects has proved to be most efficient cloud based
                    project tracking and bug tracking tool.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-400 dark:hover:text-blue-500">
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
