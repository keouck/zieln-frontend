"use client";
import React, { useState } from "react";
import { PrimaryButton } from "../../globalcomponents/Buttons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend, etc.
    console.log("Form submitted:", formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border border-gray-300 p-4 lg:p-8 rounded-xl shadow-xl"
    >
      <div className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="peer p-4 block w-full rounded-lg text-sm placeholder:text-gray-700 outline-none"
            placeholder="Name"
          />
        </div>
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="peer p-4 block w-full rounded-lg text-sm placeholder:text-gray-700 outline-none"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="peer p-4 block w-full rounded-lg text-sm placeholder:text-gray-700 outline-none"
              placeholder="Phone number"
            />
          </div>
        </div>
        <div>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="peer p-4 block w-full rounded-lg text-sm placeholder:text-gray-700 outline-none resize-none"
            placeholder="Message"
          />
        </div>
        <div className="pt-4 lg:pt-8">
          <PrimaryButton onClick={handleSubmit} buttonName="Send Message" />
        </div>
      </div>
    </form>
  );
}
