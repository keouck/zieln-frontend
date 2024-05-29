import type { MenuProps } from "antd";
import { Dropdown } from "antd";

type AntdDropdownProps = {
  items: MenuProps["items"];
  buttonLabel: string;
  placement?:
    | "bottomLeft"
    | "bottom"
    | "bottomRight"
    | "topLeft"
    | "top"
    | "topRight";
};

const AntdDropdown = ({
  items,
  buttonLabel,
  placement = "bottom",
}: AntdDropdownProps) => (
  <Dropdown
    className="flex items-center justify-center"
    menu={{ items }}
    placement={placement}
  >
    <a className="font-medium text-gray-700 hover:text-primary py-3 md:px-3 md:py-6">
      {buttonLabel}
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
    </a>
  </Dropdown>
);

export default AntdDropdown;
