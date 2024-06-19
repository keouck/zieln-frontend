import React from "react";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
} from "react-icons/hi";

export default function ContactDetail() {
  return (
    <div>
      <h2 className="component-heading">Contact Us</h2>
      <p className="my-4">
        If you have any questions or inquiries, feel free to contact us using
        the information provided below.If you have any questions or inquiries,
        feel free to contact us using the information provided below.
      </p>
      <ul className="space-y-2 lg:space-y-4 mt-6 lg:mt-12 ">
        <li className="flex items-center">
          <HiOutlineLocationMarker className="w-6 h-6 mr-2" />
          1234 Street Name, City, State, ZIP
        </li>
        <li className="flex items-center">
          <HiOutlinePhone className="w-6 h-6 mr-2" />
          (123) 456-7890
        </li>
        <li className="flex items-center">
          <HiOutlineMail className="w-6 h-6 mr-2" />
          contact@example.com
        </li>
      </ul>
    </div>
  );
}
