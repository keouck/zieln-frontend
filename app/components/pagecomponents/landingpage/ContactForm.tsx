"use client";
import React, { useState } from "react";
import { PrimaryButton } from "../../globalcomponents/Buttons";
import { post } from "@/utils/api";
import { toast } from "react-toastify";

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      if (
        !formData.name ||
        !formData.email ||
        !formData.message ||
        !formData.phone
      ) {
        return toast.warn("All fields are required!");
      }

      // Regular expression for email validation
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      // Validate email
      if (!emailRegex.test(formData.email)) {
        return toast.warn("Please enter a valid email address.");
      }

      // Here you can handle form submission, e.g., send data to backend, etc.
      await post("/queries", {
        data: {
          name: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          message: formData.message,
        },
      });

      toast.success("Your request has been captured successfully.");
    } catch (error) {
      toast.warn("Failed to capture your request.");
    }

    return setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
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
